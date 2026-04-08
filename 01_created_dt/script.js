function onEdit(e) {
  if (!e) return;

  const sheet = e.source.getActiveSheet();
  const row = e.range.getRow();
  const col = e.range.getColumn();

  const COL_TRIGGER = 2;     // B열
  const COL_CREATED_DT = 5;  // E열

  if (row <= 1 || col !== COL_TRIGGER) return;

  const triggerCell = sheet.getRange(row, COL_TRIGGER);
  const createdDtCell = sheet.getRange(row, COL_CREATED_DT);

  if (triggerCell.getValue() === "") return;

  if (!createdDtCell.getValue()) {
    createdDtCell.setValue(new Date());
    createdDtCell.setNumberFormat("yyyy-mm-dd");
  }
}
