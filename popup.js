// Saves options to chrome.storage
function save_options(reload) {
  var t1pop = document.getElementById('cb_t1pop').checked;
  var t1foc = document.getElementById('cb_t1foc').checked;
  var t1tab = document.getElementById('cb_t1tab').checked;
  var t1rel = document.getElementById('cb_reload').checked;

  
  
  chrome.storage.sync.set({
    t1pop: t1pop,
	  t1foc: t1foc,
    t1tab: t1tab,
    t1rel: t1rel
  }, function() {
	console.log('Options saved');
	if (reload == true) { chrome.runtime.reload(); }

  });
}

// Restores select box and checkbox state using the preferences stored in chrome.storage.
window.onload = function restore_options() {
  chrome.storage.sync.get({
    // default values
	t1pop: true,
	t1foc: false,
  t1tab: false,
  t1rel: true
  }, function(items) {
    document.getElementById('cb_t1pop').checked = items.t1pop;
	  document.getElementById('cb_t1foc').checked = items.t1foc;
    document.getElementById('cb_t1tab').checked = items.t1tab;
    document.getElementById('cb_reload').checked = items.t1rel;

	console.log('Options restored');
  });
}

document.getElementById('cb_t1pop').addEventListener('click', function() {save_options(true);} );
document.getElementById('cb_t1foc').addEventListener('click', function() {save_options(true);} );
document.getElementById('cb_t1tab').addEventListener('click', function() {save_options(false);} );
document.getElementById('cb_reload').addEventListener('click', function() {save_options(true);} );