"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

   const handleSelectChange = (value: string) => {
     setFormData((prev) => ({ ...prev, service: value }))
   }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      service: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-0 lg:mt-28">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600">
          {`Get in touch with our team to discuss your industrial service needs. We're here to help you optimize your
          operations and infrastructure.`}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start mb-4">
            <Phone className="mr-3 h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-600">+212 661 187 453</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start mb-4">
            <Mail className="mr-3 h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600">khalil.gtis@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start mb-4">
            <MapPin className="mr-3 h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Office</h3>
              <p className="text-gray-600">Morocco</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </label>
                 <Input id="name" name="name" value={formData.name} onChange={handleChange} required /> 
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                 <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required /> 
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                 <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} /> 
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                 <Input id="company" name="company" value={formData.company} onChange={handleChange} /> 
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </label>
               <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required /> 
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                Service of Interest
              </label>
               <Select value={formData.service} onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="industrial-assembly">Industrial Assembly</SelectItem>
                  <SelectItem value="automation">Automation</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="spare-parts">Spare Parts Supply</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select> 
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

             <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Send Message
            </Button> 
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Request a Quote</h2>
          <p className="text-gray-600 mb-6">
            {`If you're interested in our services and would like to receive a detailed quote for your project, please
            fill out the form with your specific requirements.`}
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold mb-3">What to Include in Your Request:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Detailed description of your project</li>
              <li>Specific services you{`'`}re interested in</li>
              <li>Timeline expectations</li>
              <li>Any special requirements or considerations</li>
              <li>Budget constraints (if applicable)</li>
            </ul>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">REQUEST FOR QUOTE</Button> 
        </div>
      </div>
    </div>
  )
}
