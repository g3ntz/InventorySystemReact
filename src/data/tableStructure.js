export const inventoryTable = {
  columnDefs: [
    { width: "10px", targets: [-1, -2, -3] },
    { responsivePriority: 1, targets: -1, orderable: false },
    { responsivePriority: 2, targets: -2, orderable: false },
    { responsivePriority: 3, targets: -3, orderable: false },
  ],
  columns: [
    "ID",
    "Created Date",
    "Product Name",
    "Receiver Name",
    "Issuer Name",
    "Quantity",
    "Status",
    "Notes",
    "",
    "",
  ]
};

export const productsTable = {
  columnDefs: [
    { width: "10px", targets: [-1, -2, -3] },
    { responsivePriority: 1, targets: -1, orderable: false },
    { responsivePriority: 2, targets: -2, orderable: false },
    { responsivePriority: 3, targets: -3, orderable: false },
  ],
  columns: [
    "ID",
    "Name",
    "Description",
    "Category",
    "Stock",
    "Date Created",
    "Owner",
    "Price",
    "",
    "",
    ""
  ]
};

export const usersTable = {
  columnDefs: [
    { width: "10px", targets: [-1,-2] },
    { responsivePriority: 1, targets: -1, orderable: false },
    { responsivePriority: 2, targets: -2, orderable: false }
  ],
  columns: [
    "ID",
    "Username",
    "Role",
    "Status",
    "",
    "",
  ]
};

export const adminRequestsTable = {
  columnDefs: [
    { width: "10px", targets: [-1, -2] },
    { responsivePriority: 1, targets: -1, orderable: false },
    { responsivePriority: 2, targets: -2, orderable: false }
  ],
  columns: [
    "ID",
    "Request",
    "Status",
    "Issuer",
    "",
    "",
  ]
};

// USER
export const userInventoryTable = {
  columnDefs: [
    { width: "10px", targets: [-1, -2, -3] },
    { responsivePriority: 1, targets: -1, orderable: false },
    { responsivePriority: 2, targets: -2, orderable: false },
    { responsivePriority: 3, targets: -3, orderable: false }
  ],
  columns: [
    "ID",
    "Created Date",
    "Product Name",
    "Issuer Name",
    "Quantity",
    "Status",
    "Notes",
    "",
    "",
  ]
};

export const userRequestsTable = {
  columnDefs: [
    { width: "10px", targets: [-1, -2] },
    { responsivePriority: 1, targets: -1, orderable: false },
    { responsivePriority: 2, targets: -2, orderable: false }
  ],
  columns: [
    "ID",
    "Request",
    "Status",
    "",
    "",
  ]
};