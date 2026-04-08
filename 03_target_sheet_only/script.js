function onEdit(e) {
  if (!e) return;

  const sheet = e.source.getActiveSheet();
  const sheetName = sheet.getName();

  if (sheetName !== "raw data") return;

  // raw data 시트일 때만 아래 로직 실행
}
