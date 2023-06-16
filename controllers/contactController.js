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
  const contact = await Contact.findById(req.params.id)

  if (!contact) {
    res.status(404)
    throw new Error('Contact not found')
  }

  res.status(200).json(contact)
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
  const contact = await Contact.create({
    name,
    email,
    phone
  })
  res.status(200).json(contact)
})

// @desc update contact
// @route Get /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)

  if (!contact) {
    res.status(404)
    throw new Error('Contact not found')
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedContact)
})

// @desc delete contact
// @route Get /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)

  if (!contact) {
    res.status(404)
    throw new Error('Contact not found')
  }

  await Contact.deleteOne({ _id: req.params.id })

  res.status(200).json({
    message: 'this contact is deleted',
    contact
  })
})

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}
