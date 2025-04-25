(() => {
  'use strict';

  kintone.events.on('app.record.create.submit', async (event) => {
    const record = event.record;

    const orderType = record['order_type'].value;
    const item = record['item_name'].value;
    const quantity = parseInt(record['qty'].value, 10);

    const appIdItems = 6; // Make sure this is the correct App ID

    const query = `item_name = "${item}"`;
    console.log('Running query:', query);

    try {
      const resp = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
        app: appIdItems,
        query: query
      });

      console.log('Response from Items app:', resp);

      if (resp.records.length === 0) {
        console.warn('No item found with name:', item);
        return event;
      }

      const itemRecord = resp.records[0];
      const currentStock = parseInt(itemRecord['stock'].value, 10);
      const itemId = itemRecord['$id'].value;

      let newStock = currentStock;

      if (orderType === 'Sale') {
        newStock -= quantity;
      } else if (orderType === 'Purchase') {
        newStock += quantity;
      }

      console.log(`Updating item ID ${itemId} stock from ${currentStock} to ${newStock}`);

      await kintone.api(kintone.api.url('/k/v1/record', true), 'PUT', {
        app: appIdItems,
        id: itemId,
        record: {
          stock: {
            value: newStock
          }
        }
      });

      console.log('Stock update successful');

    } catch (err) {
      console.error('Inventory update failed:', err);
    }

    return event;
  });
})();
