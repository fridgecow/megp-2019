interface IQnA {
  question: string,
  answer: string
}

interface ISection {
  heading: string,
  questions: IQnA[]
}

export const faq : ISection[] = [
  {
    heading: "EVENT DETAILS",
    questions: [
      {
        question: "When is MEGP19?",
        answer: "Sunday 16th June 4pm-9pm"
      },
      {
        question: "What type of identification will I need in order to enter the garden party?",
        answer: "You will need a form of photo identification (e.g. driving license, passport), as well as your QR code ticket on your phone. The name on your ticket must match the name on your identification, otherwise you will not be admitted into the event. Please note that no individual under the age of 18 will be admitted to the event."
      },
      {
        question: "What is the latest admission into the Garden Party?",
        answer: "Last admission to the event will be at 6pm."
      },
      {
        question: "Where do I queue on the day?",
        answer: "All guests will be asked to queue starting from outside the porter’s lodge, at the black gate on Huntingdon Road. There will be barriers put up to guide the queue so please follow the markings for safe queueing. This includes college members who will be asked to leave college before the event. There is no exception to the queueing rules for college members."
      },
      {
        question: "Is there a dress code for the event?",
        answer: "Whilst MEGP does not enforce a formal dress code, we request that guests dress respectfully and in the spirit of the event; summer smart-casual attire."
      },
      {
        question: "Will MEGP18 cater to my dietary requirements?",
        answer: "At MEGP we hope everyone will feel welcome, as such we will be offering vegetarian and vegan food, as well as gluten and dairy free, throughout the event. Allergy advice for all food items will be displayed by the stand - so you’ll know exactly what you’re eating."
      }
    ]
  },
  {
    heading: "TICKETING",
    questions: [
      {
        question: "When do tickets go on sale?",
        answer: "Tickets go on sale to Murray Edwards students at midday Sunday 17th February. Alumnae will be able to buy their tickets between midday and 8pm Saturday 16th February. There will be no general sale of tickets."
      },
      {
        question: "How much are tickets?",
        answer: "Member tickets (ie. current & former students of Murray Edwards / New Hall College) - £42\nNon-member guest tickets - £54"
      },
      {
        question: "How many tickets am I allowed to purchase?",
        answer: "Each Murray Edwards student can purchase up to 4 tickets, including their own ticket, and each alumna can purchase 1 ticket only."
      },
      {
        question: "I am an alumna of the college how do I go about buying tickets?",
        answer: "Alumnae are required to register via email sent to president@megp19.com. Registration must be completed by midday Thursday 14th of February. You will then be sent a private link which will give you access to the ticketing system, one day before tickets go live at midday Saturday 16th February. "
      },
      {
        question: "When do I have to complete registration by?",
        answer: "Alumni registration will close midday Thursday 14th February."
      },
      {
        question: "I am a current student at Murray Edwards, do I need to register?",
        answer: "Current students, both undergraduate and postgraduate, are not required to register. This year, we are using FIXR as our ticketing platform. You will need to use your University of Cambridge email, as well as entering your CRSid into the promo code box. This will enable you to purchase tickets through the FIXR system once they go live at midday on Sunday 17th February."
      },
      {
        question: "How do I pay for my tickets?",
        answer: "You’ll need to pay for your tickets using either a debit or credit card."
      },
      {
        question: "Will my tickets be reserved whilst I pay?",
        answer: "Unfortunately, tickets will not be reserved until you have paid for them, even if they are in your basket. We therefore recommend creating a FIXR account prior to the Ticket Release date to save you time whilst purchasing tickets. Remember that the FIXR account must be registered to your ‘@cam.ac.uk’ email address. Failure to do so will result in your tickets being cancelled."
      },
      {
        question: "What details will I need to provide when buying tickets?",
        answer: "FIXR requires some personal details to create your account including full name, date of birth, email address and phone number. You will then need to enter your CRSid into the promo code box. You do not need your guests’ details to purchase your tickets."
      },
      {
        question: "How will I receive my ticket?",
        answer: "You will receive an email to confirm your purchase, QR code tickets attached. One QR code will hold your Member ticket and any guest tickets that you have purchased. You MUST transfer the guest tickets to your respective guests, using the ‘Transfer to a friend’ option in your confirmation email, within 24 hours. In order to be granted admission to the Garden Party, each guest must have their own individual QR code with their name, so that it can be checked against photo ID. After 24 hours, a name change fee will have to be paid to be able to transfer the ticket to someone else.\nPlease note: this means that you cannot screenshot the QR code and send it to your guests, as they will not be admitted into the Garden Party if the name on the QR code does not match their ID."
      },
      {
        question: "I am a Murray Edwards student purchasing a ticket for my Murray Edwards friend who cannot purchase a ticket on the day, how much will her ticket be?",
        answer: "You cannot buy a ticket for another Murray Edwards student as you are only allowed one ticket at Member price. If you have been unable to purchase a ticket for yourself (Murray Edwards student), please reach out to ticketing@megp19.com. Please note, this only applies to Murray Edwards members’ tickets, not guest tickets."
      },
      {
        question: "How do I organise a name change for my ticket?",
        answer: "After the 24 hour period, you will no longer be able to transfer tickets. Any further transfers will come at a name change fee, which you will be able to purchase on our website (megp19.com), through the FIXR widget. Once you have purchased a name change, we will enable additional transfers for your ticket at the end of the name change period. "
      },
      {
        question: "Can I transfer my Member ticket to a non-member? ",
        answer: "Yes, you can, but only after the 24 hour period! You can buy a transfer for your Member ticket, which you will be able to purchase on our website (megp19.com) through the FIXR widget. You will have to pay the name change fee and the price difference (£12). Once you have purchased a name change, we will enable additional transfers for your ticket at the end of the name change period."
      },
      {
        question: "I am looking for a last minute ticket, where should I look and how much should I expect to pay?",
        answer: "We do not condone resale above a price given, so if you are looking to purchase a resale ticket, please do not accept it for an inflated price. We encourage you to post on the MEGP 2019 Event to find a seller. Name changes are possible on the website, however we will not accept any QR codes with an incorrect name. Therefore, do not accept any screenshots of tickets, as you will not be admitted."
      },
      {
        question: "I’m a Murray Edwards student, can I buy guest tickets without attending the event myself?",
        answer: "No. If the tickets that you purchase do not include a Murray Edwards Member ticket, your tickets will be cancelled and refunded."
      },
      {
        question: "Who can I contact if my question hasn’t been answered?",
        answer: "Please get in touch with us directly; ticketing@megp19.com "
      }
    ]
  }
]
