// Copyright 2011 Google Inc. All Rights Reserved.

function pickCallback(step1Div, step2Div, resultDiv, resultImg, data) {
  step1Div.hide();
  step2Div.show();
  var intent = new Intent();
  intent.action = 'http://webintents.org/save';
  intent.type = 'image/*';
  intent.data = data['data'];
  window.navigator.startActivity(intent, function(data) {
    resultImg.attr('src', data.data);
    step2Div.hide();
    resultDiv.show();
  });
};
