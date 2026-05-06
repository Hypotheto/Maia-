(function () {
  'use strict';

  var STATES_KEY = 'maia_states';
  var NOTES_KEY  = 'maia_notes';

  var CFG = {
    active:      { label: 'Active',      emoji: '🎯', color: '#156c2f', bg: '#dff7e6' },
    shortlisted: { label: 'Shortlisted', emoji: '⭐', color: '#8a5a00', bg: '#fff3d6' },
    applied:     { label: 'Applied',     emoji: '📨', color: '#1a4fba', bg: '#e8f0fe' },
    watching:    { label: 'Watching',    emoji: '👁',  color: '#5c5b57', bg: '#f0f0ee' },
    'not-fit':   { label: 'Not a fit',   emoji: '✗',  color: '#8a3300', bg: '#fdecea' },
    archived:    { label: 'Archived',    emoji: '🗑',  color: '#888',    bg: '#ececec' }
  };

  var FADED = new Set(['not-fit', 'archived']);

  /* ---------- storage ---------- */
  function getStates() { try { return JSON.parse(localStorage.getItem(STATES_KEY) || '{}'); } catch(e) { return {}; } }
  function getNotes()  { try { return JSON.parse(localStorage.getItem(NOTES_KEY)  || '{}'); } catch(e) { return {}; } }
  function setState(id, s) { var o = getStates(); o[id] = s; localStorage.setItem(STATES_KEY, JSON.stringify(o)); }
  function setNote(id, t)  { var o = getNotes();  o[id] = t; localStorage.setItem(NOTES_KEY,  JSON.stringify(o)); }

  /* ---------- helpers ---------- */
  function meta(name) { var el = document.querySelector('meta[name="'+name+'"]'); return el ? el.content : null; }

  function countdown(ds) {
    if (!ds) return '';
    var d = new Date(ds), t = new Date();
    t.setHours(0,0,0,0); d.setHours(0,0,0,0);
    var diff = Math.round((d - t) / 86400000);
    if (diff > 0)  { var c = diff <= 7 ? '#c0392b' : diff <= 14 ? '#e67e22' : '#156c2f'; return '<span style="font-weight:700;color:'+c+';">'+diff+' day'+(diff===1?'':'s')+' left</span>'; }
    if (diff === 0) return '<span style="font-weight:700;color:#c0392b;">Deadline TODAY</span>';
    return '<span style="color:#888;">Deadline passed '+Math.abs(diff)+' day'+(Math.abs(diff)===1?'':'s')+' ago</span>';
  }

  /* ---------- detail page ---------- */
  function initDetail() {
    var panel = document.getElementById('action-panel');
    var id    = meta('card-id');
    if (!panel || !id) return;

    var states   = getStates();
    var notes    = getNotes();
    var current  = states[id] || 'active';
    var note     = notes[id] || '';
    var dl       = meta('deadline');
    var lc       = meta('last-checked');
    var cfg      = CFG[current];

    var deadlineRow   = dl ? '<div class="ap-row"><span class="ap-label">Deadline</span> '+countdown(dl)+'</div>' : '';
    var lastCheckedRow= lc ? '<div class="ap-row"><span class="ap-label">Last checked</span> <span style="color:#5c5b57;">'+lc+'</span></div>' : '';

    var btns = Object.keys(CFG).filter(function(k){ return k !== current; }).map(function(k){
      var v = CFG[k];
      return '<button class="ap-btn" data-state="'+k+'" style="background:'+v.bg+';color:'+v.color+';">'+v.emoji+' '+v.label+'</button>';
    }).join('');

    panel.innerHTML =
      '<div class="action-panel-inner">'+
        '<div class="ap-status-row">'+
          '<span class="ap-status" style="background:'+cfg.bg+';color:'+cfg.color+';">'+cfg.emoji+' '+cfg.label+'</span>'+
          deadlineRow + lastCheckedRow +
        '</div>'+
        '<div class="ap-buttons">'+btns+'</div>'+
        '<div class="ap-notes">'+
          '<label for="ap-notes-field">Notes</label>'+
          '<textarea id="ap-notes-field" placeholder="Add your notes here…">'+note+'</textarea>'+
        '</div>'+
        '<div class="ap-export-row">'+
          '<button class="ap-export-btn" id="ap-export">⬇ Export all data</button>'+
          '<label class="ap-export-btn" for="ap-import">⬆ Import data</label>'+
          '<input type="file" id="ap-import" accept=".json" style="display:none">'+
        '</div>'+
      '</div>';

    panel.querySelectorAll('.ap-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ setState(id, btn.dataset.state); initDetail(); });
    });

    var ta = document.getElementById('ap-notes-field');
    if (ta) ta.addEventListener('input', function(){ setNote(id, ta.value); });

    document.getElementById('ap-export').addEventListener('click', exportData);
    document.getElementById('ap-import').addEventListener('change', importData);
  }

  /* ---------- homepage ---------- */
  function initHomepage() {
    var states  = getStates();
    var showFaded = false;

    document.querySelectorAll('[data-card-id]').forEach(function(card){
      var id    = card.dataset.cardId;
      var state = states[id] || 'active';
      var cfg   = CFG[state];

      // deadline countdown badge
      var dl = card.dataset.deadline;
      if (dl) {
        var cdHtml = countdown(dl);
        if (cdHtml) {
          var cdEl = document.createElement('p');
          cdEl.innerHTML = '<strong>Deadline:</strong> ' + cdHtml;
          cdEl.style.margin = '4px 0 0';
          var firstP = card.querySelector('p');
          if (firstP) firstP.insertAdjacentElement('afterend', cdEl); else card.appendChild(cdEl);
        }
      }

      if (state === 'active') return;

      // status badge
      var badge = document.createElement('span');
      badge.className = 'badge';
      badge.style.cssText = 'background:'+cfg.bg+';color:'+cfg.color+';display:inline-block;margin-bottom:8px;';
      badge.textContent = cfg.emoji+' '+cfg.label;
      card.insertBefore(badge, card.firstChild);

      if (FADED.has(state)) card.classList.add('card--faded');
    });

    // toggle faded
    var toggle = document.getElementById('toggle-faded');
    if (toggle) {
      toggle.addEventListener('click', function(){
        showFaded = !showFaded;
        document.querySelectorAll('.card--faded').forEach(function(c){ c.style.opacity = showFaded ? '1' : ''; });
        toggle.textContent = showFaded ? 'Collapse archived / not a fit' : 'Show archived / not a fit';
      });
    }

    renderStatusSections(states);

    document.getElementById('ap-export') && document.getElementById('ap-export').addEventListener('click', exportData);
    var imp = document.getElementById('ap-import'); imp && imp.addEventListener('change', importData);
  }

  function renderStatusSections(states) {
    var container = document.getElementById('status-sections');
    if (!container) return;
    var groups = { shortlisted: [], applied: [], watching: [] };
    Object.keys(states).forEach(function(id){
      var s = states[id];
      if (groups[s]) groups[s].push(id);
    });
    var any = false;
    var html = Object.keys(groups).map(function(s){
      var ids = groups[s];
      if (!ids.length) return '';
      any = true;
      var cfg = CFG[s];
      var items = ids.map(function(id){
        var card  = document.querySelector('[data-card-id="'+id+'"]');
        var title = card ? (card.querySelector('h2') || card.querySelector('h3') || {}).textContent : id;
        var link  = card ? (card.querySelector('a[href*="opportunities"]') || {}).href : '#';
        return '<li><a href="'+(link||'#')+'">'+(title||id)+'</a></li>';
      }).join('');
      return '<div class="status-group"><h3 style="color:'+cfg.color+';margin:0 0 8px;">'+cfg.emoji+' '+cfg.label+'</h3><ul style="margin:0;padding-left:18px;">'+items+'</ul></div>';
    }).join('');
    container.innerHTML = any ? html : '<p style="color:#888;margin:0;">Nothing filed yet. Open an opportunity and use the action buttons.</p>';
  }

  /* ---------- export / import ---------- */
  function exportData() {
    var data = { exported: new Date().toISOString(), states: getStates(), notes: getNotes() };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'maia-tracker-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
  }

  function importData(e) {
    var file = e.target.files[0]; if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev){
      try {
        var d = JSON.parse(ev.target.result);
        if (d.states) localStorage.setItem(STATES_KEY, JSON.stringify(d.states));
        if (d.notes)  localStorage.setItem(NOTES_KEY,  JSON.stringify(d.notes));
        window.location.reload();
      } catch(err) { alert('Could not read file — make sure it is a valid Maia export.'); }
    };
    reader.readAsText(file);
  }

  /* ---------- init ---------- */
  document.addEventListener('DOMContentLoaded', function(){
    if (document.getElementById('action-panel')) initDetail();
    else initHomepage();
  });
})();
