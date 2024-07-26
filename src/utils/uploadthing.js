const { generateUploadButton, generateUploadDropzone } = require("@uploadthing/react");

// Tidak ada setara dengan `type` di JavaScript, jadi kita hapus
// Menggunakan require untuk mengimpor `OurFileRouter` dalam core.js jika perlu
const { OurFileRouter } = require("~/app/api/uploadthing/core");

const UploadButton = generateUploadButton();
const UploadDropzone = generateUploadDropzone();

module.exports = { UploadButton, UploadDropzone };
