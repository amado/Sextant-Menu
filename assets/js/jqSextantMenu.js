// for normal display
// ==================
// for each UL that is inside of the selected element, write (or add) attribute class="breadcrumbShow"



// find where the LI with class="here" is



// replace class="breadcrumbShow" with class="breadcrumbHide" in every UL that is NOT ((the parent UL, parent-parent UL, etc.) OR (the first child UL, if it exists)) of the LI with class="here"



// for hover actions
// default action. If this plugin is passed a variable for hoverActions=no, then skip this
// =======================================================================================
// replace class="breadcrumbHide" with class="breadcrumbShow" in every parent UL, parent-parent UL, etc. of the LI that is being hovered-over



// replace class="breadcrumbHide" with class="breadcrumbShow" in the first child UL, if it exists, of the LI that is being hovered-over



// when the LI is no longer being hovered-over, put the classes of the ULs changed in this step back to what they were



// If and only if the plugin is passed a variable for hideHereOnHover=yes
// ======================================================================
// if anything in the selected element is being hovered over, change all the class="breadcrumbShow" to class="breadcrumbHide", except if it's an element that's being hovered over. In effect, collapsing the class="here" part of the list unless that's the part being hovered.




// replace class="breadcrumbHide" with class="breadcrumbShow" in every parent UL, parent-parent UL, etc. of the LI that is being hovered-over



// replace class="breadcrumbHide" with class="breadcrumbShow" in the first child UL, if it exists, of the LI that is being hovered-over



// when the LI is no longer being hovered-over, put the classes of the ULs changed in this step back to what they were



