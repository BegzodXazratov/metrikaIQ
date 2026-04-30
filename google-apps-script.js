// =====================================================
// GOOGLE APPS SCRIPT — TargetPro Form Handler (v2)
// Sheets ID: 1zU2NMf0kWesxH4CLLuUn4ORIxIo9fzPeb8tFFacw8ig
// =====================================================

const SHEET_ID = '1zU2NMf0kWesxH4CLLuUn4ORIxIo9fzPeb8tFFacw8ig';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // URLSearchParams orqali kelgan ma'lumotlarni o'qish
    const data = e.parameter;

    // Birinchi qatorda sarlavha yo'q bo'lsa — qo'sh
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['📅 Sana', '👤 Ism', '📞 Telefon', '📧 Email', '🏢 Biznes', '💳 Tarif', '💬 Izoh']);
      sheet.getRange(1, 1, 1, 7)
        .setFontWeight('bold')
        .setBackground('#18c45a')
        .setFontColor('#ffffff');
    }

    sheet.appendRow([
      data.date     || '',
      data.fname    || '',
      data.phone    || '',
      data.email    || '',
      data.business || '',
      data.tarif    || '',
      data.msg      || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ishlayapti' }))
    .setMimeType(ContentService.MimeType.JSON);
}
