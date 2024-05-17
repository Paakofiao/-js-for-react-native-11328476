function createUserProfiles (firstName, modiName ){
    return firstName.map(function(name, index){
        return{
        firstNames: name, 
        modifiedName: modiName[index], 
        id: index + 1
    };
    });


    }

