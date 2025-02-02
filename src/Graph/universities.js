const universities = [
  {
    // Balasore
    name: "Fakir Mohan University",
    neighbors: [
      { name: "MSCB University", distance: 56 },
      { name: "Fakir Mohan Autonomous College", distance: 16 },
      { name: "Fakir Mohan Medical College", distance: 5 },
      { name: "Dharanidhar University", distance: 166 },
      { name: "Bhadrak Autonomous College", distance: 78 },
      { name: "NC Autonomous College", distance: 114 },
    ],
  },
  {
    
    name: "Fakir Mohan Autonomous College",
    neighbors: [
      { name: "Fakir Mohan University", distance: 16 },
      
    ],
  },
  {
    
    name: "Fakir Mohan Medical College",
    neighbors: [
      { name: "Fakir Mohan University", distance: 5 },
      
    ],
  },
  {
    // Mayurbhanj
    name: "MSCB University",
    neighbors: [
      { name: "Fakir Mohan University", distance: 56 },
      { name: "Dharanidhar University", distance: 165 },
      { name: "Biju Patnaik University", distance: 274 },
      { name: "MPC Autonomous College", distance: 0.35 },
    ],
  },
  {
    
    name: "MPC Autonomous College",
    neighbors: [
      { name: "MSCB University", distance: 0.35 },
      
    ],
  },
  {
    // Keonjhar
    name: "Dharanidhar University",
    neighbors: [
      { name: "MSCB University", distance: 165 },
      { name: "Fakir Mohan University", distance: 166 },
      { name: "Biju Patnaik University", distance: 162 },
      { name: "SUIIT", distance: 231 },
      { name: "NC Autonomous College", distance: 144 },
      { name: "Bhadrak Autonomous College", distance: 128 },
      { name: "Dhenkanal Autonomous College", distance: 160 },
      { name: "IIMC", distance: 157 },
      { name: "Dhenkanal Law College", distance: 152 },

    ],
  },
  {
    name: "IIMC",
    neighbors: [
      { name: "Dharanidhar University", distance: 157 }
    ]
  },
  {
    // Bhadrak
    name: "Bhadrak Autonomous College",
    neighbors: [
      { name: "Fakir Mohan University", distance: 78 },
      { name: "NC Autonomous College", distance: 36 },
      { name: "Kendrapada Autonomous College", distance: 101 },
      { name: "Dharanidhar University", distance: 128 },
    ],
  },
  {

    // Kendrapada
    name: "Kendrapada Autonomous College",
    neighbors: [
      { name: "Bhadrak Autonomous College", distance: 101 },
      { name: "NC Autonomous College", distance: 53 },
      { name: "Swami Vivekananda Autonomous College", distance: 55 },
      { name: "Ravenshaw University", distance: 59 },
    ],
  },
  {
    // Jagatsingpur
    name: "Swami Vivekananda Autonomous College",
    neighbors: [
      { name: "Kendrapada Autonomous College", distance: 55 },
      { name: "Ravenshaw University", distance: 41 },
      { name: "Sanskrit University", distance: 73 },
      { name: "Utkal University", distance: 53 },

    ],
  },
  {
    // puri
    name: "Sanskrit University",
    neighbors: [
      { name: "Odia University", distance: 27 },
      { name: "Swami Vivekananda Autonomous College", distance: 72 },

    ],
  },
  {
    // puri
    name: "Odia University",
    neighbors: [
      { name: "Sanskrit University", distance: 27 },
      { name: "Ramadevi Women University", distance: 50 },
      { name: "Ravenshaw University", distance: 66 },
      { name: "Berhampur University", distance: 157 },

    ],
  },
  // khorda
  {
    name: "Utkal University",
    neighbors: [
      { name: "Ramadevi Women University", distance: 2 },
      { name: "Ravenshaw University", distance: 25 },
      { name: "Madhusudan Law University", distance: 25 },
      { name: "National Law University", distance: 34 },
      { name: "BJB Autonomous College", distance: 7 },
      { name: "CET", distance: 10 },
      { name: "Rajdhani College", distance: 5 },
    ],
  },
  {
    name: "Rajdhani College",
    neighbors: [
      { name: "Utkal University", distance: 5 },
    ],
  },
  {
    name: "CET",
    neighbors: [
      { name: "Utkal University", distance: 10 },
    ],
  },
  
  {
    name: "BJB Autonomous College",
    neighbors: [
      { name: "Utkal University", distance: 7 },
    ],
  },
  {
    name: "Ramadevi Women University",
    neighbors: [
      { name: "Utkal University", distance: 2 },
      { name: "Odia University", distance: 50 },
    ],
  },
  {
    // Cuttack
    name: "Madhusudan Law University",
    neighbors: [
      { name: "Ravenshaw University", distance: 1 },
      { name: "National Law University", distance: 13 },
      { name: "Utkal University", distance: 25 },
      { name: "IMIT", distance: 7 },
      { name: "Jatiyakabi Virakishor College", distance: 2.5 },
      { name: "Dhenkanal Autonomous College", distance: 48 },
      { name: "Nayagarh Autonomous College", distance: 102 },
    ],
  },
  {
    name: "Jatiyakabi Virakishor College",
    neighbors: [
      { name: "Madhusudan Law University", distance: 2.5 },
    ],
  },
  {
    name: "IMIT",
    neighbors: [
      { name: "Madhusudan Law University", distance: 7 },
    ],
  },
  {
    name: "National Law University",
    neighbors: [
      { name: "Madhusudan Law University", distance: 13 },
      { name: "Utkal University", distance: 34 },
      { name: "Dhenkanal Autonomous College", distance: 40 },
      { name: "Indira Gandhi University", distance: 27 },
    ],
  },
  {
    // jajapur
    name: "NC Autonomous College",
    neighbors: [
      { name: "Bhadrak Autonomous College", distance: 36 },
      { name: "Dharanidhar University", distance: 135 },
      { name: "Fakir Mohan University", distance: 114 },
      { name: "Kendrapada Autonomous College", distance: 53 },
      { name: "Ravenshaw University", distance: 73 },
      { name: "Dhenkanal Autonomous College", distance: 96 },
    ],
  },
  {
    name: "Ravenshaw University",
    neighbors: [
      { name: "NC Autonomous College", distance: 73 },
      { name: "Madhusudan Law University", distance: 1 },
      { name: "Utkal University", distance: 25 },
      { name: "Swami Vivekananda Autonomous College", distance: 41 },
      { name: "Odia University", distance: 66 },
      { name: "Kendrapada Autonomous College", distance: 59 },
    ],
  },
  {
    // Sundergarh
    name: "Biju Patnaik University",
    neighbors: [
      { name: "MSCB University", distance: 274 },
      { name: "Dharanidhar University", distance: 162 },
      { name: "Gangadhar Meher University", distance: 162 },
      { name: "SUIIT", distance: 184 },
      { name: "Indira Gandhi University", distance: 212 },
      { name: "Panchayat College", distance: 221 },
      { name: "Government Autonomous College Sundergarh", distance: 5 },
    ],
  },
  {
    name: "Government Autonomous College Sundergarh",
    neighbors: [
      { name: "Biju Patnaik University", distance: 5 },
    ],
  },
  {
    // Bargarh
    name: "Panchayat College",
    neighbors: [
      { name: "Imperior College", distance: 13 },
      { name: "Bergarh Law College", distance: 5 },
      { name: "Biju Patnaik University", distance: 221 },
      { name: "SUIIT", distance: 42 },
      { name: "VSSUT", distance: 44 },
      { name: "Sambalpur University", distance: 43 },
      { name: "Sonepur College", distance: 79 },
      { name: "Rajendra University", distance: 81 },
    ],
  },
  {
    name: "Imperior College",
    neighbors: [
      { name: "Panchayat College", distance: 13 },
    ],
  },
 
  {
    // Sambalpur
    name: "Sambalpur University",
    neighbors: [
      { name: "Gangadhar Meher University", distance: 15 },
      { name: "SUIIT", distance: 0.7 },
      { name: "VSSUT", distance: 5 },
      { name: "Government Women College", distance: 16 },
      { name: "Panchayat College", distance: 43 },
    ],
  },
  {
    name: "Government Women College",
    neighbors: [
      { name: "Sambalpur University", distance: 16 },
    ],
  },
  
  {
    name: "VSSUT",
    neighbors: [
      { name: "Gangadhar Meher University", distance: 10 },
      { name: "Sambalpur University", distance: 5 },
      { name: "Panchayat College", distance: 44 },
      { name: "SUIIT", distance: 6 },

    ],
  },
  {
    name: "SUIIT",
    neighbors: [
      { name: "Dharanidhar University", distance: 231 },
      { name: "Biju Patnaik University", distance: 184 },
      { name: "Panchayat College", distance: 42 },
      { name: "Sambalpur University", distance: 0.7 },
      { name: "Gangadhar Meher University", distance: 15 },
      { name: "VSSUT", distance: 6 },
    ],
  },
  {
    name: "Gangadhar Meher University",
    neighbors: [
      { name: "Biju Patnaik University", distance: 162 },
      { name: "Sambalpur University", distance: 15 },
      { name: "VSSUT", distance: 10 },
      { name: "SUIIT", distance: 15 },
      { name: "Indira Gandhi University", distance: 15 },
    ],
  },
  {
    // Anugul
    name: "Indira Gandhi University",
    neighbors: [
      { name: "Gangadhar Meher University", distance: 15 },
      { name: "Biju Patnaik University", distance: 212 },
      { name: "Dharanidhar University", distance: 138 },
      { name: "National Law University", distance: 27 },
      { name: "Dhenkanal Autonomous College", distance: 66 },
      { name: "Model Degree College", distance: 114 },
    ],
  },
  {
    // Dhenkanal
    name: "Dhenkanal Autonomous College",
    neighbors: [
      { name: "NC Autonomous College", distance: 96 },
      { name: "Dharanidhar University", distance: 160 },
      { name: "Indira Gandhi University", distance: 66 },
      { name: "National Law University", distance: 40 },
      { name: "Nayagarh Autonomous College", distance: 40 },
    ],
  },
  {
    name: "Dhenkanal Law College",
    neighbors: [
      { name: "Dharanidhar Law College", distance: 152}
    ]
  },
  {
    name: "Dharanidhar Law College",
    neighbors: [
      { name: "Dhenkanal Law College", distance: 152 },
    ],
  },
  {
    name: "Bergarh Law College",
    neighbors: [
      { name: "Panchayat College", distance: 5 },
    ],
  },
  {
    name: "Nayagarh Autonomous College",
    neighbors: [
      { name: "Madhusudan Law University", distance: 102 },
      { name: "Berhampur University", distance: 122 },
      { name: "Model Degree College", distance: 136 },

    ],
  },
  {
    name: "Sonepur College",
    neighbors: [
      { name: "Model Degree College", distance: 55 },
      { name: "Panchayat College", distance: 79 },
      { name: "Indira Gandhi University", distance: 159 },
      { name: "Sambalpur University", distance: 93 },
      { name: "Rajendra University", distance: 52 },

    ],
  },
  {
    name: "Rajendra University",
    neighbors: [
      { name: "Sonepur College", distance: 280 },
      { name: "Panchayat College", distance: 81 },
      { name: "Model Degree College", distance: 105 },
      { name: "Government Autonomous College", distance: 170 },
      { name: "Maa Manikeswari University", distance: 103 },
      { name: "Lokadrishti Advance Technology", distance: 113 },
    ],
  }, 
  {
    name: "Model Degree College",
    neighbors: [
      { name: "Rajendra University", distance: 105 },
      { name: "Sonepur College", distance: 55 },
      { name: "Nayagarh Autonomous College", distance: 136 },
      { name: "Indira Gandhi University", distance: 114 },
    ],
  },
  
  {
    name: "Maa Manikeswari University",
    neighbors: [
      { name: "Rajendra University", distance: 103 },
      { name: "Government Autonomous College", distance: 190 },
      { name: "Vikram Dev University", distance: 166 },
      { name: "Lokadrishti Advance Technology", distance: 75 },
      { name: "Rayagada Autonomous College", distance: 105 },
    ],
  },
  {
    name: "Government Autonomous College",
    neighbors: [
      { name: "Rajendra University", distance: 170 },
      { name: "Maa Manikeswari University", distance: 190 },
      { name: "Rayagada Autonomous College", distance: 222 },
    ],
  },
  {
    name: "Lokadrishti Advance Technology",
    neighbors: [
      { name: "Maa Manikeswari University", distance: 75 },
      { name: "Rajendra University", distance: 113 },
    ],
  },
  {
    name: "Central University",
    neighbors: [
      { name: "Vikram Dev University", distance: 21 },
      { name: "Berhampur University", distance: 330 },
      { name: "Khallikot University", distance: 316 },
      { name: "Government College Koraput", distance: 16 },
    ],
  },
  {
    name: "Government College Koraput",
    neighbors: [
      { name: "Central University", distance: 16 },
      
    ],
  },
  {
    name: "Rayagada Autonomous College",
    neighbors: [
      { name: "Central University", distance: 111 },
      { name: "Vikram Dev University", distance: 132 },
      { name: "Government Autonomous College", distance: 222 },
      { name: "MKCG", distance: 208 },
    ],
  },
  {
    name: "Vikram Dev University",
    neighbors: [
      { name: "Rayagada Autonomous College", distance: 132 },
      { name: "Central University", distance: 21 },
      { name: "Maa Manikeswari University", distance: 166 },
    ],
  },
  {
    name: "MKCG",
    neighbors: [
      { name: "Government Science College", distance: 20 },
      { name: "Lingaraj Law College", distance: 2 },
      { name: "Rayagada Autonomous College", distance: 208 },
    ],
  },
  {
    name: "Government Science College",
    neighbors: [
      { name: "MKCG", distance: 20 },
    ],
  },
  {
    name: "Lingaraj Law College",
    neighbors: [
      { name: "MKCG", distance: 2 },
    ],
  },
  {
    name: "Berhampur University",
    neighbors: [
      { name: "Khallikot University", distance: 12 },
      { name: "Nayagarh Autonomous College", distance: 122 },
      { name: "Odia University", distance: 157 },
    ],
  },
  {
    name: "Khallikot University",
    neighbors: [
      { name: "Berhampur University", distance: 12 },
      { name: "Central University", distance: 316 },
     
    ],
  },


];

export default universities;