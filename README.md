# Kintone Inventory Automation

This repository contains the JavaScript customization used to automate inventory tracking for a small business using Kintone. It integrates multiple apps within Kintone to streamline the inventory process and reduce manual overhead.

---

## Kintone App Structure

The solution consists of three interconnected Kintone apps:

### 1. **Items**
- **Purpose**: Stores the list of items available for sale or purchase.
- **Connected To**: Orders app (via lookup).
- **Functionality**:
  - Displays all items available, stock, and corresponding orders that include them

### 2. **Contactsr**
- **Purpose**: Stores contacts information for both customer and vendor
- **Views**: Separate views for customers and vendors.
- **Functionality**:
  - Displays all orders associated with each contact.

### 3. **Orders**
- **Purpose**: Tracks all purchase and sales orders.
- **Features**:
  - Contains a **process management workflow** for tracking order statuses (Requested -> In progress -> Completed).
  - Linked to both Items and Contacts through lookup fields.

---

## What the JavaScript Code Does

The JavaScript customization automates inventory updates based on the status of an order. Specifically:

- **On order submission**, it adjusts item stock counts in the **Item Master** app:
  - If it’s a **sale**, it subtracts the quantity from the item stock.
  - If it’s a **purchase**, it adds the quantity to the item stock.
- Prevents double subtraction/addition using status checks.
- Uses **Kintone event handlers** like `app.record.edit.submit.success` or `app.record.create.submit.success`.

This automation reduces human error and keeps stock levels accurate in real time.

---

## How It Runs on Kintone

The script runs client-side using Kintone’s JavaScript API and event handlers. It’s loaded directly into the **Orders** app’s customization settings and listens for key events to trigger inventory adjustments.

The code uses:

- `kintone.api()` to interact with the Item Master app records
- `kintone.events.on()` to trigger logic when orders are created or updated
- Asynchronous handling using promises for chained operations

---

## How to Edit or Add This Code in Kintone

To customize or edit the code within your Kintone app:

1. **Go to the Orders App** in Kintone.
2. Click the **gear icon** (⚙️) → **App Settings** → **Customization and Integration**.
3. Under **JavaScript and CSS Customization**, click **Edit**.
4. Upload your JavaScript file (`inventory-automation.js`) OR paste the code directly.
5. Click **Save** and **Update App** to apply changes.
6. Use **JSEdit Plugin** (optional): If installed, you can use the JSEdit plugin to conveniently write and test JavaScript directly inside Kintone.

---

## Files in This Repository

inventory-management/
├── js/
│   └── inventory-automation.js  # JavaScript code 
├── mock-data/                   # sample data for items and contacts
│   └── Contacts_10.csv       
|   └── Items_10.csv
|
├── README.md                    


## Resources

- [Kintone Help Docs](https://get.kintone.help/general/en/)
- [Kintone API Documentation](https://kintone.dev/en/docs/)
- [Kintone JS Customization Guide](https://kintone.dev/en/tutorials/introduction-to-kintone-customizations/)
- [Mockaroo - Fake Data Generator](https://mockaroo.com/)
