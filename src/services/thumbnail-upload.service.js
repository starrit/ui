export const uploadThumbnail = (file, url, progressCallback, completeCallback) => {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  formData.append('file', file);

  if (xhr.upload) {
    xhr.upload.onprogress = progressCallback;
  }

  xhr.onreadystatechange = e => {
    if (xhr.readyState === 4 && xhr.status === 201) {
      completeCallback();
    }
  };

  xhr.open('post', url, true);
  xhr.send(formData);
};
