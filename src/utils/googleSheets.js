/**
 * Google Sheets Integration Utility
 * 
 * This utility handles fetching data from Google Sheets API
 * Useful for roster management, event sign-ups, etc.
 */

/**
 * Fetch data from Google Sheets
 * @param {string} spreadsheetId - Google Sheets ID
 * @param {string} range - Range to fetch (e.g., 'Sheet1!A1:D10')
 * @param {string} apiKey - Google Sheets API Key
 * @returns {Promise<Array>} - Array of sheet rows
 */
export const fetchGoogleSheetsData = async (spreadsheetId, range, apiKey) => {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch sheet data');
    }
    
    const data = await response.json();
    return data.values || [];
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return [];
  }
};

/**
 * Convert sheet data to objects with headers
 * @param {Array} sheetData - Raw sheet data
 * @returns {Array} - Array of objects with header keys
 */
export const parseSheetData = (sheetData) => {
  if (sheetData.length === 0) return [];
  
  const headers = sheetData[0];
  const rows = sheetData.slice(1);
  
  return rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] || '';
    });
    return obj;
  });
};

/**
 * Example usage for roster management:
 * 
 * const rosterData = await fetchGoogleSheetsData(
 *   'YOUR_SPREADSHEET_ID',
 *   'Roster!A1:F100',
 *   'YOUR_API_KEY'
 * );
 * const parsedRoster = parseSheetData(rosterData);
 */