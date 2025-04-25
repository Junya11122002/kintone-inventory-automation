# Kintone Inventory Automation

This repository contains the JavaScript customization used to automate inventory tracking for a small business using Kintone. 

---

## Kintone App Structure

### 1. **Items**
- **Purpose**: Stores the list of items available for sale or purchase.
- **Connected To**: Orders app (via lookup).
- **Functionality**:
  - Displays all items available, stock, and corresponding orders that include them

### 2. **Contacts**
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

- On order submission, it adjusts item stock counts in the Items app:
  - If it’s a sale, it subtracts the quantity from the item stock.
  - If it’s a purchase, it adds the quantity to the item stock.
- Prevents double subtraction/addition using status checks.
- Uses Kintone event handlers `app.record.create.submit.success`.


---


## Resources

- [Kintone Help Docs](https://get.kintone.help/general/en/)
- [Kintone API Documentation](https://kintone.dev/en/docs/)
- [Kintone JS Customization Guide](https://kintone.dev/en/tutorials/introduction-to-kintone-customizations/)
- [Mockaroo - Fake Data Generator](https://mockaroo.com/)
