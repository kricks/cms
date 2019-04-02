var express = require('express');
var router = express.Router();

const Document = require('../models/document');

router.get('/', (request, response, next) => {
    Document.find().then(documents => {
        response.status(200).json({
            message: 'Documents fetched successfully',
            documents: documents
        });
    })
    .catch(error => {
        returnError(response, error);
    })
});

// function saveDocument(response, document) {
//     let save = Document.save();

//     if (!save) {
//         response.status(500).json({
//             message: "Documents not saved!"
//         });
//     }
//     // what do i do here?
//     getDocuments()
// }

// function deleteDocument(response, deleteDocument) {
//     let remove = Document.remove();

//     if (!remove) {
//         response.status(500).json({
//             message: "Document not deleted!"
//         });
//     } else {
//         response.status(200).json(remove);
//     }
// }

module.exports = router;
