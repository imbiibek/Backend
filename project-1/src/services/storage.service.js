const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({

    privateKey: "private_mAHnoRfJc7TANAJU/qaOhkXWwVw="

})

async function uploadFile(buffer) {

    const result = await imagekit.client.upload({
        file: buffer,
        fileName: "image.jpg"
    })

    return result;

}

module.exports = uploadFile;