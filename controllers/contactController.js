const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModal')
// @desc Get all contacts
// @route Get /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find()
  res.status(200).json(contacts)
})

// @desc Get a contact
// @route Get /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contacts ${req.params.id}` })
})

// @desc create new contact
// @route Get /api/contacts/
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    res.status(400)
    throw new Error('All fields are mandatory')
  }
  res.status(200).json({ message: 'create new contacts' })
})

// @desc update contact
// @route Get /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update a contacts ${req.params.id}` })
})

// @desc delete contact
// @route Get /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete a contacts ${req.params.id}` })
})

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}
