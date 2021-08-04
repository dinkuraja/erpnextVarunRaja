# Copyright (c) 2021, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class SharePoint(Document):
	def on_submit(self):
		for d in self.get('add_resumes'):
			self.updatedStock = frappe.new_doc("Screening")
			self.updatedStock.name = 1
			self.updatedStock.job_description = self.job_position
			self.updatedStock.cv = d.resume
			self.updatedStock.job_resources = d.source 
			self.updatedStock.save()
