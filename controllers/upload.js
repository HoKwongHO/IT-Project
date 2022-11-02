
exports.upload = async (req, res) => {
    const files = req.files;
    logger.info('uploaded info:', files);
    if (!files.length) {
      return res.error('402009');
    }
    const file = files[0];
    let filePath = '';
    if (file.fieldname === 'uploads') {
      filePath = `${config.get("baseUrl")}/api/v1/preview/${file.filename}`;
    } else {
      return res.error('402009');
    }
    res.success({ name: file.originalname.filename, url: filePath });
  };