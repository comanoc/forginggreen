function toggle(event) {
  var sectionToToggle = arguments[1]; //Pass id of accordian to toggle
  var bsCollapse = new bootstrap.Collapse(sectionToToggle, {
    toggle: true
  });
}
