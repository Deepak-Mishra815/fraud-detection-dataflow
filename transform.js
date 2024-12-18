function transform(line) {
  try {
    // Split the line by commas into an array
    var values = line.split(',');

    // Check if the line is a header row
    if (values[0].trim() === 'TransactionID') {
      return; // Skip the header row
    }

    // Create a new empty object
    var obj = new Object();

    // Map values to object properties dynamically
    obj.TransactionID = values[0].trim();
    obj.AccountID = values[1].trim();
    obj.TransactionAmount = values[2].trim() === '' ? null : parseFloat(values[2].trim());
    obj.TransactionDate = values[3].trim() === '' ? null : new Date(values[3].trim()).toISOString();
    obj.TransactionType = values[4].trim();
    obj.Location = values[5].trim();
    obj.DeviceID = values[6].trim();
    obj.IPAddress = values[7].trim();
    obj.MerchantID = values[8].trim();
    obj.Channel = values[9].trim();
    obj.CustomerAge = values[10].trim() === '' ? null : parseInt(values[10].trim());
    obj.CustomerOccupation = values[11].trim();
    obj.TransactionDuration = values[12].trim() === '' ? null : parseInt(values[12].trim());
    obj.LoginAttempts = values[13].trim() === '' ? null : parseInt(values[13].trim());
    obj.AccountBalance = values[14].trim() === '' ? null : parseFloat(values[14].trim());
    obj.PreviousTransactionDate = values[15].trim() === '' ? null : new Date(values[15].trim()).toISOString();

    // Return the object as a JSON string
    var jsonString = JSON.stringify(obj);
    return jsonString;
  } catch (error) {
    // Remove the console.error statement
    return null;
  }
}