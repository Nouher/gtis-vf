import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/Components/ui/dialog"
import { Building, FileText, Mail, MessageSquare, Phone, Send, User } from "lucide-react"
import { useState } from "react"




export function QuoteDialog() {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    })
    setIsSubmitting(false)
    

    alert("Demande de devis envoyée avec succès ! Nous vous contacterons dans les 24 heures.")
  }

  return (
    <Dialog >
      <form className='text-inherit'>
        <DialogTrigger asChild>
          <Button variant="default" size="lg" className="bg-blue-950 text-white z-50 px-3 py-2 rounded-sm  hover:bg-blue-800 border-inherit hover:scale-105 hidden lg:flex">REQUEST FOR QUOTE</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1024px] ">
           <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-full">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Demander un Devis</h2>
              <p className="text--100">Obtenez un devis personnalisé pour votre projet industriel</p>
            </div>
          </div>
               <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-600" />
                Informations Personnelles
              </h3>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Entrez votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre.email@entreprise.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+212 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l{`'`}Entreprise
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Informations du Projet
              </h3>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Requis *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="assemblage-metallique">Assemblage Métallique</option>
                  <option value="installation-mecanique">Installation Mécanique</option>
                  <option value="installation-electrique">Installation Électrique</option>
                  <option value="automatisation">Automatisation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="ingenierie">Ingénierie</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de Projet
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez le type de projet</option>
                  <option value="nouvelle-installation">Nouvelle Installation</option>
                  <option value="mise-a-niveau">Mise à Niveau</option>
                  <option value="contrat-maintenance">Contrat de Maintenance</option>
                  <option value="service-reparation">Service de Réparation</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Estimé
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez la fourchette budgétaire</option>
                  <option value="moins-50k">Moins de 50 000 MAD</option>
                  <option value="50k-100k">50 000 - 100 000 MAD</option>
                  <option value="100k-500k">100 000 - 500 000 MAD</option>
                  <option value="500k-1m">500 000 - 1 000 000 MAD</option>
                  <option value="plus-1m">Plus de 1 000 000 MAD</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Délai du Projet
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez le délai</option>
                  <option value="urgent">Urgent (Dans le mois)</option>
                  <option value="court-terme">Court terme (1-3 mois)</option>
                  <option value="moyen-terme">Moyen terme (3-6 mois)</option>
                  <option value="long-terme">Long terme (6+ mois)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="inline h-4 w-4 mr-1" />
              Description du Projet *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Veuillez décrire les exigences de votre projet, les spécifications et tout détail supplémentaire qui nous aiderait à fournir un devis précis..."
            ></textarea>
          </div>

         

         
        </form>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" size="lg" type="button" className="px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">Cancel</Button>
              
            </DialogClose>
            <Button type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer la Demande
                </>
              )}
              </Button>
          </DialogFooter>
           <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note :</strong> Nous examinerons votre demande et vous contacterons dans les 24 heures avec un
              devis détaillé. Pour les demandes urgentes, veuillez nous appeler directement au{" "}
              <a href="tel:+212667060089" className="font-semibold hover:underline">
                +212 667-060089
              </a>
              .
            </p>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
