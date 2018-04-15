/*
 * GET users listing.
 */
exports.getDialogElem = function(data, intent) {
    for(var i=0; i<data.length; i++) {
        if (data[i].intent == intent){
            return data[i]; 
        }
    }
};

exports.getResponseData = function(data, entity) {
    for(var i=0; i<data.length; i++) {
        if (data[i].entityType == entity){
            console.log(data[i]);
            return data[i]; 
        }
    }
};

/*  

assignCopy(){
    this.filteredItems = Object.assign([], this.entities);
}


filterItem(value){
    if(!value) this.assignCopy(); //when nothing has typed
    this.filteredItems = Object.assign([], this.entities).filter(
        item => item.entityType.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }
*/