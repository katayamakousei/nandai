function doGet() {
  return HtmlService.createTemplateFromFile('New')
        .evaluate()
      .setTitle("test")
      .addMetaTag("viewport", "width=device-width,initial-scale=1");
}
