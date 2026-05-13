import React, {
  useState,
  useEffect,
  useRef,
} from "react";

import "./AddExpense.css";

import { FaWallet } from "react-icons/fa";

import Swal from "sweetalert2";

import API from "../../Api/axois";

const AddExpense = () => {

  // ================= STATES =================
  const [activeMenu, setActiveMenu] = useState(null);

  const menuRef = useRef();

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const [loading, setLoading] = useState(false);

  const [editId, setEditId] = useState(null);

  const [expenses, setExpenses] = useState([]);

  const [expenseHeads, setExpenseHeads] = useState([]);

  const accountTypes = [
    "Savings",
    "Salary",
    "Current",
  ];

  const paymentModes = [
    "Cash",
    "Card",
    "UPI",
    "Bank Transfer",
  ];

  const [formData, setFormData] = useState({
    head: "",
    accountType: "",
    accountName: "",
    name: "",
    amount: "",
    invoice: "",
    date: "",
    paymentMode: "",
    description: "",
  });


  // ================= CLOSE DROPDOWN =================
  useEffect(() => {
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClick
      );
    };
  }, []);


  // ================= FETCH EXPENSE HEADS =================
  const fetchExpenseHeads = async () => {
    try {
      const res = await API.get(
        "/expense-heads"
      );

      setExpenseHeads(res.data);

    } catch (error) {
      console.log(error);

      Swal.fire(
        "Error",
        "Failed to load expense heads",
        "error"
      );
    }
  };


  // ================= FETCH EXPENSES =================
  const fetchExpenses = async () => {
    try {
      setLoading(true);

      const res = await API.get("/expenses");

      setExpenses(res.data);

    } catch (error) {
      console.log(error);

      Swal.fire(
        "Error",
        "Failed to load expenses",
        "error"
      );

    } finally {
      setLoading(false);
    }
  };


  // ================= INITIAL LOAD =================
  useEffect(() => {
    fetchExpenseHeads();
    fetchExpenses();
  }, []);


  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "amount"
          ? Number(value)
          : value,
    });
  };


  // ================= RESET FORM =================
  const resetForm = () => {
    setFormData({
      head: "",
      accountType: "",
      accountName: "",
      name: "",
      amount: "",
      invoice: "",
      date: "",
      paymentMode: "",
      description: "",
    });

    setEditId(null);
  };


  // ================= SAVE / UPDATE =================
  const handleSave = async () => {

    if (
      !formData.head ||
      !formData.name ||
      !formData.amount ||
      !formData.date
    ) {
      return Swal.fire(
        "Validation Error",
        "Please fill required fields",
        "warning"
      );
    }

    try {

      setLoading(true);

      if (editId) {

        // UPDATE
        await API.put(
          `/expenses/${editId}`,
          formData
        );

        Swal.fire(
          "Updated",
          "Expense updated successfully",
          "success"
        );

      } else {

        // CREATE
        await API.post(
          "/expenses",
          formData
        );

        Swal.fire(
          "Success",
          "Expense added successfully",
          "success"
        );
      }

      fetchExpenses();

      resetForm();

    } catch (error) {

      console.log(error);

      Swal.fire(
        "Error",
        error.response?.data?.message ||
          "Something went wrong",
        "error"
      );

    } finally {
      setLoading(false);
    }
  };


  // ================= EDIT =================
  const handleEdit = (item) => {

    setFormData({
      head: item.head || "",
      accountType:
        item.accountType || "",
      accountName:
        item.accountName || "",
      name: item.name || "",
      amount: item.amount || "",
      invoice: item.invoice || "",
      date:
        item.date?.slice(0, 10) || "",
      paymentMode:
        item.paymentMode || "",
      description:
        item.description || "",
    });

    setEditId(item._id);
  };


  // ================= DELETE =================
  const handleDelete = async (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "Expense will be deleted permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {

      if (result.isConfirmed) {

        try {

          await API.delete(
            `/expenses/${id}`
          );

          Swal.fire(
            "Deleted",
            "Expense deleted successfully",
            "success"
          );

          fetchExpenses();

        } catch (error) {

          console.log(error);

          Swal.fire(
            "Error",
            "Delete failed",
            "error"
          );
        }
      }
    });
  };


  // ================= PAGINATION =================
  const totalPages = Math.ceil(
    expenses.length / itemsPerPage
  );

  const indexOfLast =
    currentPage * itemsPerPage;

  const indexOfFirst =
    indexOfLast - itemsPerPage;

  const currentData = expenses.slice(
    indexOfFirst,
    indexOfLast
  );


  return (
    <div className="ae-page">

      {/* HEADER */}
      <div className="ae-header">
        <div className="ae-header-left">
          <FaWallet className="ae-icon" />
          <h2>Add Expense</h2>
        </div>

        <span className="ae-breadcrumb">
          Expense / Add Expense
        </span>
      </div>


      <div className="ae-layout">

        {/* ================= FORM ================= */}
        <div className="ae-card">

          <div className="ae-card-top">
            ✏ Add / Edit Expense
          </div>

          <div className="ae-form ae-scroll">

            {/* Expense Head */}
            <div className="ae-field">
              <label>
                Expense Head *
              </label>

              <select
                name="head"
                value={formData.head}
                onChange={handleChange}
              >
                <option value="">
                  Select
                </option>

                {expenseHeads.map((e) => (
                  <option
                    key={e._id}
                    value={e.name}
                  >
                    {e.name}
                  </option>
                ))}
              </select>
            </div>


            {/* Account Type */}
            <div className="ae-field">
              <label>
                Account Type
              </label>

              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
              >
                <option value="">
                  Select
                </option>

                {accountTypes.map(
                  (e, i) => (
                    <option
                      key={i}
                      value={e}
                    >
                      {e}
                    </option>
                  )
                )}
              </select>
            </div>


            {/* Account Name */}
            <div className="ae-field">
              <label>
                Account Name
              </label>

              <select
                name="accountName"
                value={formData.accountName}
                onChange={handleChange}
              >
                <option value="">
                  Select
                </option>

                <option value="Office Account">
                  Office Account
                </option>
              </select>
            </div>


            {/* Name */}
            <div className="ae-field">
              <label>Name *</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </div>


            {/* Amount */}
            <div className="ae-field">
              <label>Amount *</label>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
              />
            </div>


            {/* Invoice */}
            <div className="ae-field">
              <label>
                Invoice No
              </label>

              <input
                type="text"
                name="invoice"
                value={formData.invoice}
                onChange={handleChange}
                placeholder="Enter invoice number"
              />
            </div>


            {/* Date */}
            <div className="ae-field">
              <label>Date *</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>


            {/* Payment Mode */}
            <div className="ae-field">
              <label>
                Payment Mode
              </label>

              <select
                name="paymentMode"
                value={formData.paymentMode}
                onChange={handleChange}
              >
                <option value="">
                  Select
                </option>

                {paymentModes.map(
                  (e, i) => (
                    <option
                      key={i}
                      value={e}
                    >
                      {e}
                    </option>
                  )
                )}
              </select>
            </div>


            {/* Description */}
            <div className="ae-field">
              <label>
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
              />
            </div>


            {/* BUTTON */}
            <button
              className="ae-btn"
              onClick={handleSave}
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : editId
                ? "Update Expense"
                : "Save Expense"}
            </button>

          </div>
        </div>


        {/* ================= TABLE ================= */}
        <div className="ae-card">

          <div className="ae-card-top">
            📋 Expense List
          </div>

          <div className="ae-table-wrap">

            <table className="ae-table">

              <thead>
                <tr>
                  <th>HEAD</th>
                  <th>NAME</th>
                  <th>ACCOUNT</th>
                  <th>INVOICE</th>
                  <th>AMOUNT</th>
                  <th>DATE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>

                {currentData.length > 0 ? (

                  currentData.map(
                    (e, i) => {

                      const realIndex =
                        indexOfFirst + i;

                      return (
                        <tr key={e._id}>
                          <td>{e.head}</td>
                          <td>{e.name}</td>
                          <td>
                            {e.accountName}
                          </td>
                          <td>{e.invoice}</td>
                          <td>{e.amount}</td>

                          <td>
                            {new Date(
                              e.date
                            ).toLocaleDateString()}
                          </td>

                          <td>
                            {e.description}
                          </td>

                          <td className="ae-action">

                            <button
                              onClick={() =>
                                setActiveMenu(
                                  realIndex
                                )
                              }
                              className="ae-action-btn"
                            >
                              Action
                            </button>

                            {activeMenu ===
                              realIndex && (

                              <div
                                className="ae-dropdown"
                                ref={menuRef}
                              >

                                <div
                                  onClick={() =>
                                    handleEdit(e)
                                  }
                                >
                                  ✏ Edit
                                </div>

                                <div
                                  className="del"
                                  onClick={() =>
                                    handleDelete(
                                      e._id
                                    )
                                  }
                                >
                                  🗑 Delete
                                </div>

                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    }
                  )

                ) : (

                  <tr>
                    <td
                      colSpan="8"
                      style={{
                        textAlign:
                          "center",
                      }}
                    >
                      No Expense Found
                    </td>
                  </tr>
                )}

              </tbody>
            </table>


            {/* PAGINATION */}
            <div className="ae-pagination">

              <span>
                Showing{" "}
                {indexOfFirst + 1}
                {" "}to{" "}
                {Math.min(
                  indexOfLast,
                  expenses.length
                )}{" "}
                of {expenses.length} entries
              </span>

              <div className="ae-pagination-controls">

                <button
                  disabled={
                    currentPage === 1
                  }
                  onClick={() =>
                    setCurrentPage(
                      currentPage - 1
                    )
                  }
                >
                  Previous
                </button>

                {[...Array(totalPages)].map(
                  (_, i) => (
                    <button
                      key={i}
                      className={
                        currentPage ===
                        i + 1
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setCurrentPage(
                          i + 1
                        )
                      }
                    >
                      {i + 1}
                    </button>
                  )
                )}

                <button
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  onClick={() =>
                    setCurrentPage(
                      currentPage + 1
                    )
                  }
                >
                  Next
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AddExpense;