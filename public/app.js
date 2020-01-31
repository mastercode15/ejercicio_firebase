var db=firebase.firestore();

function save(){
    var nombre = document.getElementById("nombre").value;
    var ci = document.getElementById("ci").value;
    var docName = document.getElementById("docName").value;

    if(docName !="" && nombre != "" && ci != "")
    {
        db.collection("Students").doc(docName).set({
            name: nombre,
            ci: ci
        }).then(()=>{
            alert("Documento actualizado exitosamente !");
        })
    }else if(nombre != "" && ci != ""){
        db.collection("Students").add({
            name: nombre,
            ci: ci
        }).then(()=>{
            alert("informacion guardada con éxito");
        })
    }
    else
    alert("debes llenar la informacion para guardar");
    
}

function update(){
    var nombre = document.getElementById("nombre").value;
    var ci = document.getElementById("ci").value;
    var docName = document.getElementById("docName").value;

    //var nombreDoc = document.getElementById("docName").value;
    db.collection("Students").doc(docName).set({
        name: nombre,
        ci: ci
    }).then(()=>{
        alert("Documento actualizado exitosamente !");
    })
}

function delet(){
    var docName = document.getElementById("docName").value;  
    db.collection("Students").doc(docName).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    }).then(()=>{
        alert("Documento eliminado exitosamente !");
    })
}

function mostrar(){
    db.collection("Students")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            //info.innerHTML=doc.data();
             console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
