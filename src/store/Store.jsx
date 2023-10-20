import { useState, createContext } from "react";

const Store = createContext();

function StoredData(props) {
  const [data, setData] = useState([
    // Bollywood

    {
      id: 1,
      category: "Bollywood",
      name: "Gadar 2",
      image:
        "https://th.bing.com/th/id/OIP.8tdRn8KyuF2yEXUZ1xFMnAHaE1?pid=ImgDet&rs=1",
      text: "Gadar 2 (transl.Rebellion 2; subtitled onscreen with The Katha Continues) is a 2023 Indian Hindi-language period action drama film directed and produced by Anil Sharma, and written by Shaktimaan Talwar. A sequel to Gadar: Ek Prem Katha, It starred Sunny Deol, Ameesha Patel and Utkarsh Sharma, who reprised their roles from the previous film.[5] In the film, Tara Singh returns to Pakistan in order to rescue his imprisoned son before the Indo-Pakistani War of 1971.",
    },
    {
      id: 2,
      category: "Bollywood",
      name: "Friday Night Plan",
      image:
        "https://images.unsplash.com/photo-1461603950871-cd64bcf7acf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvbGx5d29vZHxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=400&q=60",
      text: "Friday Night Plan is a teen comedy about two brothers who sneak out to a party while their mother is away123. The brothers are very different: one is a nerd and the other is a prankster4. They have to overcome their conflicts and work together to avoid getting caught and missing the fun123. The film stars Amrith Jayan, Babil Khan, and Juhi Chawla4.",
    },
    {
      id: 3,
      category: "Bollywood",
      name: "Jawan",
      image:
        "https://th.bing.com/th/id/OIP.1MxEXHMUxqY2DmLx8ER2mwHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      text: "Jawan (transl. Soldier) is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee as his first Hindi film.[4] It is produced by Gauri Khan and Gaurav Verma under Red Chillies Entertainment. The film stars Shah Rukh Khan in a dual role as father and son doppelgängers who team up to rectify corruption in society. Nayanthara, Vijay Sethupathi, Deepika Padukone (billed as a special appearance), Priyamani and Sanya Malhotra appear in supporting roles.",
    },
    {
      id: 4,
      category: "Bollywood",
      name: "Thackery",
      image:
        "https://th.bing.com/th/id/OIP.uxltnaUzkmIkJFM00vq2FQHaEl?w=279&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      text: "Thackeray received mixed reviews from critics.[12] Times of India gave the film 3 stars out of 5 and states: While the honesty is commendable, it comes across that the lead characters political motivations lack clarity. Perhaps a more seasoned writer, could have fleshed out Thackerays characters and eccentricities a lot better. But, its Nawaz nonchalant performance that overshadows the flaws and leaves a lasting impact.",
    },
    {
      id: 5,
      category: "Bollywood",
      name: "Mirzapur ",
      image:
        "https://th.bing.com/th/id/OIP.oCkieg52CJ1iwFZrb0fQ2gHaFj?w=210&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      text: "The first season of Mirzapur was released on 16 November 2018.[4] The series opened to positive response from audiences, while critics gave mixed reviews.[5] The performances of the cast members, particularly Pankaj Tripathi's, received rave response.[5] It eventually became the most popular web series in India, after Sacred Games.[6] The second season of Mirzapur was released on 23 October 2020.[7][8] The third season of the show will be expected in 2023 as its cast is on its way.[9][10][11]",
    },
    {
      id: 6,
      category: "Bollywood",
      name: "Gangs of Wasseypur",
      image:
        "https://th.bing.com/th/id/OIP.fP7qAfXMJF-xgURqmnRXAgHaE7?w=281&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      text: "Gangs of Wasseypur is a 2012 Indian Hindi-language two-part gangster action crime film produced and directed by Anurag Kashyap,[3] and written by Kashyap and Zeishan Quadri. Centered on the coal mafia (Mafia Raj) of Dhanbad, and the underlying power struggles, politics and vengeance between three crime families, the film has an ensemble cast, with Manoj Bajpai, Nawazuddin Siddiqui, Pankaj Tripathi, Richa Chadda, Huma Qureshi and Tigmanshu Dhulia in the major roles. Its story spans 68 years from 1941 to 2009.",
    },
    {
      id: 7,
      category: "Bollywood",
      name: "Guns and Gulabs",
      image:
        "https://th.bing.com/th/id/OIP.C9arZ1za_SPQ-KuKJpkD7AHaEB?w=296&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      text: "The story is set in Gulaabganj, a fictional town where government-licensed opium is grown. The vast majority of opium flow is controlled by two rival gangs, led by Ganchi and Nabeed. Gangaram, a local student, witnesses Babu Tiger, the right-hand man of Ganchi, being murdered by a hired killer named Four-Cut Aatmaram. Ganchi strikes a deal with Sukanto to deliver a large quantity of opium by the end of the month. Tipu, Babu's son, is a mechanic who is disgusted by Babu's criminal ways. He rejects Ganchi's offer to join his gang. Tipu wants to impress his crush Chandralekha, an English teacher at the school, by writing her a letter in English expressing his feelings. Since he cannot speak English, he hires Gangaram and his friends Nannu and Ikhlaq to write the letter. When Gangaram finds out that the letter is for Lekha, he sabotages it as he also has a crush on her.",
    },
    {
      id: 8,
      category: "Bollywood",
      name: "Sacred Games",
      image:
        "https://th.bing.com/th/id/OIP.AWbEVwtl06_Ma7iCN6n7fQHaEC?w=257&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      text: "Sacred Games began development after Netflix vice-president Erik Barmack asked Motwane in 2014 to create Indian content for the platform. They decided to adapt Chandra's novel in Hindi. After a script was completed, Motwane asked Kashyap to co-direct; Motwane directed the scenes with Singh, and Kashyap directed Gaitonde's scenes. Swapnil Sonawane was director of photography for Motwane; Sylvester Fonseca and Aseem Bajaj filmed the scenes directed by Kashyap. In the second season, Motwane reduced his involvement to showrunner and was replaced as director by Neeraj Ghaywan. Aarti Bajaj was the editor, and Alokananda Dasgupta composed the background score.",
    },
    {
      id: 9,
      category: "Bollywood",
      name: "Gurgaon",
      image:
        "https://th.bing.com/th/id/OIP.rLdhoGhAef1vjjAp_T_SBwHaEK?w=330&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      text: "Nikki Singh (Akshay Oberoi) is a boxer and the wayward son of real estate tycoon, Kehri Singh (Pankaj Tripathi). He is often sidelined in favour of his sister, Preet (Ragini Khanna), whom Kehri considers his lucky charm. Kehri shrewdly runs Preet Real Estate, successfully, in his daughter's name. Preet has just returned from France, after completing her course in architecture, and convinces her father to create a park, instead of a multi-billion real estate project on a land closer to a forest.",
    },
    {
      id: 10,
      category: "Bollywood",
      name: "Haddi",
      image:"https://th.bing.com/th/id/OIP.SazKqIOQ7rvOlJ3cpi8ArwHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      text: "Haddi is a crime thriller movie or web series1234that stars Nawazuddin Siddiqui as a transgender rookie named Haddi134. Haddi joins a gang of transgenders in Delhi and becomes a ruthless criminal123. She is on a mission to exact revenge from those who destroyed her life2, but she also has dark secrets and a shady business that could expose her2. The movie or web series is directed by Akshat Ajay Sharma and produced by Zee Studios and Anandita Studios14.",
    },

    // Technology
    {
      id: 11,
      category: "Technology",
      name: "Blue Dart",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ckU2W.img?w=500&h=333&m=6",
      text: "Blue Dart Express Limited, a express air and integrated transportation and distribution logistics company, unveiled its newly revamped service, formerly known as Dart Plus, as Bharat Dart, the company announced through an exchange filing. This strategic transformation marks a momentous milestone in Blue Dart's ongoing journey, underscoring its unwavering commitment to serving the diverse needs of Bharat.",
    },
    {
      id: 12,
      category: "Technology",
      name: "Apple",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDV2y.img?w=534&h=300&m=6&x=685&y=71&s=47&d=47",
      text: "The new prices represent a reduction from their original launch prices, making them more accessible to users. Please note that these prices apply to the official Apple website/stores, and the selling prices on e-commerce platforms like Amazon and Flipkart may differ. If you've been considering a price drop for older iPhones, now is an opportune time to make a purchase.",
    },
    {
      id: 13,
      category: "Technology",
      name: "BlueSky",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDXPo.img?w=534&h=300&m=6",
      text: "he world of Social media is getting interesting day by day as the fortunes of many platforms keep changing. While Meta's Threads is facing a harsh active user decline, Bluesky seems to be doing the opposite. The social media platform Bluesky, created by Twitter Co-founder Jack Dorsey is performing really well as the latest statistics suggest. Bluesky has officially reached a significant milestone on September 13 and now boasts having one million users.",
    },
    {
      id: 14,
      category: "Technology",
      name: "MegaBook T1",
      image:
        "https://th.bing.com/th?id=ORMS.f0a526d5e24ac15ad4a33a3e86a8d6a6&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0",
      text: "Thinese smartphone maker Tecno has forayed into the laptop segment with the new Tecno MegaBook T1. The new laptop may attract a lot of potential customers because of the aggressive pricing despite offering up to Intel Core i7, 1TB SSD, and 16GB of RAM. The laptop boasts a sleek design, which may also resemble Apple MacBooks. It features an aluminium metal casing and a large trackpad. The display has a considerable chin with Tecno branding, which again resembles the MacBook branding on Apple laptops.",
    },
    {
      id: 15,
      category: "Technology",
      name: "Fastest Launch",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1c1alE.img?w=534&h=300&m=6",
      text: "Tata Elxsi, a global leader in product engineering and innovation-led design services, announced a strategic alliance with Ateme, a global leader in video compression, delivery, and streaming solutions with innovation at its core, to deliver a pre-integrated FAST (Free Ad-Supported Television) channel deployment solution, the company on Wednesday announced through an exchange filing.",
    },
    {
      id: 16,
      category: "Technology",
      name: "Over 50% of drugs",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDMWy.img?w=534&h=300&m=6",
      text: "CPHI, a global community for pharmaceutical professionals, predicts that AI would transform all processes in drug development by 2026. Furthermore, by 2030, over 50 per cent of US FDA approvals are anticipated to involve AI-discovered and developed drugs.",
    },
    {
      id: 17,
      category: "Technology",
      name: "Avinash Malladhi",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDVC7.img?w=534&h=300&m=6&x=547&y=206&s=173&d=173",
      text: "In the rapidly evolving landscape of enterprise resource planning (ERP), the infusion of intelligence isn't merely a futuristic concept but a prominent reality that is reshaping the fabric of modern organizations already. This transformation is more than streamlined operations; it’s about the amalgamation of two concepts to exist in a symbiotic relationship.",
    },
    {
      id: 18,
      category: "Technology",
      name: "Gen AI Programming world",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDCqH.img?w=534&h=300&m=6",
      text: "My coding journey is reflective of the maxim: ‘Change is the only constant’. I started with FoxPro programming and have since worked with SQL, C++, Pl/SQL, Python, Spark, Julia and more. Over the years, advancements such as integrated development environments (IDEs) have been adding intelligence into coding with features like autocompletion, identification of syntactic errors, etc. However, the advent of generative AI has been a step change. AI models are fast becoming co-pilots for coders. The comprehension capability of LLMs has made it possible to generate code snippets and test cases, rapidly convert code from one programming language to another, predict and pre-empt problems, manage system documentation and find ways to optimise code.",
    },
    {
      id: 19,
      category: "Technology",
      name: "Next-gen firewalls",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60",
      text: "Today’s firewalls – next-gen firewalls as they are called – are more intelligent. They are application aware, which means they can recognise and classify applications passing through it, and help the system make decisions based on the application, its features, and the content it’s carrying. They also have intrusion prevention capability.",
    },
    {
      id: 20,
      category: "Technology",
      name: "5G Equipment",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1gDBGQ.img?w=534&h=293&m=6",
      text: "Samsung is eyeing India as a potential hub for its 5G equipment production, as it contemplates alternatives to China for its manufacturing expansion. The South Korean tech giant is weighing India against Vietnam for this shift",
    },

    //Hollywood
    {
      id: 21,
      category: "Hollywood",
      name: "The god Father",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWN0b3JzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      text: "Paramount Pictures obtained the rights to the novel for $80,000, before it gained popularity.[3][4] Studio executives had trouble finding a director; the first few candidates turned down the position before Coppola signed on to direct the film but disagreement followed over casting several characters, in particular, Vito (Marlon Brando) and Michael (Al Pacino). Filming took place primarily on location around New York City and in Sicily, and was completed ahead of schedule. The musical score was composed principally by Nino Rota, with additional pieces by Carmine Coppola.",
    },
    {
      id: 22,
      category: "Hollywood",
      name: "The Shawshank Redemption",
      image:"https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWN0b3JzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      text: "The Shawshank Redemption is a 1994 American prison drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. The film tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis Red Redding (Morgan Freeman), and becomes instrumental in a money laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.",
    },
    {
      id: 23,
      category: "Hollywood",
      name: "Schindler's List",
      image:
        "https://images.unsplash.com/photo-1468857006728-bba1dba0eb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFjdG9yc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Ideas for a film about the Schindlerjuden (Schindler Jews) were proposed as early as 1963. Poldek Pfefferberg, one of the Schindlerjuden, made it his life's mission to tell Schindler's story. Spielberg became interested when executive Sidney Sheinberg sent him a book review of Schindler's Ark. Universal Pictures bought the rights to the novel, but Spielberg, unsure if he was ready to make a film about the Holocaust, tried to pass the project to several directors before deciding to direct it.",
    },
    {
      id: 24,
      category: "Hollywood",
      name: "Raging Bull",
      image:
        "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFjdG9yc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Raging Bull is a 1980 biographical sports drama film directed by Martin Scorsese123. The film chronicles the life of Jake LaMotta, a middleweight boxing champion known as The Raging Bull and The Bronx Bull 1. The film follows two decades of his life, and how the violence inside the ring was only an extension of his violence and temper outside of it1. The film is shot in black and white, except for the home video footage2.",
    },
    {
      id: 25,
      category: "Hollywood",
      name: "Casablanca",
      image:
        "https://images.unsplash.com/photo-1515095984775-726a54913d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFjdG9yc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Casablanca is a 1942 American film drama123that is based on a true story4. The film is set in Casablanca, Morocco during World War II15423, where refugees are looking for a way out of Europe5. The film follows Rick Blaine, a cynical expatriate American cafe owner, who has to choose between helping his former lover and her fugitive husband escape the Nazis or staying neutral15423. The film is one of the most celebrated and iconic motion pictures in history1.",
    },
    {
      id: 26,
      category: "Hollywood",
      name: "Citizen Kane",
      text: "Citizen Kane is a 1941 American drama film directed by, produced by, and starring Orson Welles. He and Herman J. Mankiewicz wrote the screenplay. The picture was Welles' first feature film. Citizen Kane is frequently cited as the greatest film ever made.[5] For 50 consecutive years, it stood at number 1 in the British Film Institute's Sight & Sound decennial poll of critics, and it topped the American Film Institute's 100 Years ... 100 Movies list in 1998, as well as its 2007 update. The film was nominated for Academy Awards in nine categories and it won for Best Writing (Original Screenplay) by Mankiewicz and Welles. Citizen Kane is praised for Gregg Toland's cinematography, Robert Wise's editing, Bernard Herrmann's music, and its narrative structure, all of which have been considered innovative and precedent-setting.",
      image:
        "https://images.unsplash.com/photo-1508326289668-bc6e6c8e89ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFjdG9yc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 27,
      category: "Hollywood",
      name: "THE EQUALIZER 3",
      image:
        "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFjdG9yc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Actress Dakota Fanning was born Hannah Dakota Fanning in Conyers, Georgia. Her father was a former minor league baseball player and her mother a former tennis professional. Fanning began her acting career in small local productions at the Towne Lake Arts Center in Woodstock, Georgia, a town near where she lived with her family. Her first professional",
    },
    {
      id: 28,
      category: "Hollywood",
      name: "Rebel Without a Cause",
      image:
        "https://images.unsplash.com/photo-1590123047191-898a69afb209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGFjdG9yc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Rebel Without a Cause is a 1955 American coming-of-age romantic drama film about emotionally confused suburban, middle-class teenagers12345. It was directed by Nicholas Ray and filmed in the then recently introduced CinemaScope format1. The movie tells the story of an affluent family and their troubled son, Jim, who makes friends at the local high school with equally troubled teenagers, Judy and Plato3. The movie featured James Dean in one of his final roles; he died one month before the release245.",
    },
    {
      id: 29,
      category: "Hollywood",
      name: "The Third Man",
      image:
        "https://images.unsplash.com/photo-1563208723-b1d4ef49af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGFjdG9yc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Paramount Pictures obtained the rights to the novel for $80,000, before it gained popularity.[3][4] Studio executives had trouble finding a director; the first few candidates turned down the position before Coppola signed on to direct the film but disagreement followed over casting several characters, in particular, Vito (Marlon Brando) and Michael (Al Pacino). Filming took place primarily on location around New York City and in Sicily, and was completed ahead of schedule. The musical score was composed principally by Nino Rota, with additional pieces by Carmine Coppola.",
    },
    {
      id: 30,
      category: "Hollywood",
      name: "The god Father",
      image:
        "https://images.unsplash.com/photo-1592884497623-ec496f48de8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGFjdG9yc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Paramount Pictures obtained the rights to the novel for $80,000, before it gained popularity.[3][4] Studio executives had trouble finding a director; the first few candidates turned down the position before Coppola signed on to direct the film but disagreement followed over casting several characters, in particular, Vito (Marlon Brando) and Michael (Al Pacino). Filming took place primarily on location around New York City and in Sicily, and was completed ahead of schedule. The musical score was composed principally by Nino Rota, with additional pieces by Carmine Coppola.",
    },

    // Fitness
    {
      id: 31,
      name: "Running Shoes",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Additionally, fashion has often evolved into many different designs, such as high heels, which are most commonly worn by women during fancy occasions. Contemporary footwear varies vastly in style, complexity and cost. Basic sandals may consist of only a thin sole and simple strap and be sold for a low cost. High fashion shoes made by famous designers may be made of expensive materials, use complex construction and sell for large sums of money. Some shoes are designed for specific purposes, such as boots designed specifically for mountaineering.",
    },
    {
      id: 32,
      name: "Dumbbells Set",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1648657850347-81445c3978ae?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtYmVsfGVufDB8MHwwfHx8MA%3D%3D",
      text: "The name dumbbell comes from an exercise apparatus that was somewhat common throughout the 1700s, which was supposedly similar to the apparatus used to ring a church bell, but without making any actual noise, hence “dumb”12. The part of the church bell that makes the ringing sound is called the clapper, which is a heavy iron length with a bulbous end3. Since the exercise apparatus didn't make any noise, they were called dumbbells 2.",
    },
    {
      id: 33,
      name: "Yoga",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      text: "Yoga is a physical, mental and spiritual practice that originated in ancient India. First codified by the sage Patanjali in his Yoga Sutras around 400 C.E, the practice was in fact handed down from teacher to student long before this text arose. Traditionally, this was a one-to-one transmission, but since yoga became popular in the West in the 20th century, group classes have become the norm.",
    },
    {
      id: 34,
      name: "Protein",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvdGVpbnxlbnwwfDB8MHx8fDA%3D",
      text: "Once a protein has its shape, it can bind to other selected molecules in order to carry out its function.4 That function could be signaling, storing, transporting, providing structure, fighting foreign invaders, acting as a catalyst, or another function.",
    },
    {
      id: 35,
      name: "Fitness Tracker",
      category: "Fitness",
      image:
        "https://www.themanual.com/wp-content/uploads/sites/9/2022/02/fitbit-charge-fitness-band-featured-image.jpg?fit=800%2C800&p=1",
      text: "The evolution of fitness technology doesn’t just go back decades, but centuries. Leonardo da Vinci once envisioned a device that would measure one’s steps with military applications. Its first recorded description was in France in the 1670s, then again in the 1780s in Switzerland, and finally, in the U..S by Thomas Jefferson, when he introduced the mechanical pedometer. ",
    },
    {
      id: 36,
      name: "Jump Rope",
      category: "Fitness",
      image:
        "https://plus.unsplash.com/premium_photo-1664299555455-3e0a5542d3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEp1bXAlMjBSb3BlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      text: "umping rope requires very simple equipment: a jump rope, good shoes, and an impact-reducing surface. Most jump ropes cost under US$10 and can be found in sporting goods and many general merchandise stores. Jumping rope is a relatively high-impact fitness activity, making choosing the right shoes especially important. Shoes should be well padded and provide good arch support. Shoes designed for running or cross training are often a good choice. Jumping rope in bare feet is not recommended, as this can put a high amount of stress on the feet and ankles.",
    },
    {
      id: 37,
      name: "Workout Gloves",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1520529301226-42abc4cd766b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdvcmtvdXQlMjBHbG92ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Gloves are considered ideal for workout sessions and training program to protect hands and to enhance traction over rods, dumbbells and other gym accessories. Apart from protection against abrasion, calluses and bacteria, workout gloves also provide you an added level of support for your wrists, fingers and palms. Some of the gloves are specifically designed to cushion hands from knurling whilst enhancing traction for improved grip.",
    },
    {
      id: 38,
      name: "Resistance Bands",
      category: "Fitness",
      image:
        "https://plus.unsplash.com/premium_photo-1666736567369-70478a396449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmVzaXN0YW5jZSUyMEJhbmRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      text: "Although there are many different forms of exercises for the bands, the resistance of the band as well as the number of repetitions are the main variables used to lower or increase the intensity of the workout.[3][4] In 2014, researchers found that the Bench Press and the resistance band Push-up, at similar stress levels, produced similar strength gains.",
    },
    {
      id: 39,
      name: "Fitness Ball",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1578762560042-46ad127c95ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Rml0bmVzcyUyMEJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "When performing stability ball exercises, the muscles that make up the core and surround the hips and shoulders have to work together to keep the body strong through a full range of motion Increased stability is useful for many reasons, both in and out of the gym. Stable joints are less prone to injury, because they have the strength to stay in the correct position during taxing movements.",
    },
    {
      id: 40,
      name: "Protein Bar",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1629214831802-bb2a07f9517e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHJvdGVpbiUyMEJhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      text: "Protein bars are targeted to people who primarily want a convenient source of protein that does not require preparation (unless homemade).[1] There are different kinds of food bars to fill different purposes. Energy bars provide the majority of their food energy (calories) in carbohydrate form. Meal replacement bars are intended to replace the variety of nutrients in a meal. Protein bars are usually lower in carbohydrates than energy bars, lower in vitamins and dietary minerals than meal replacement bars, and significantly higher in protein than either.",
    },

    //Food
    {
      id: 41,
      name: "Pizza Margherita",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBpenphJTIwTWFyZ2hlcml0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      text: "The most ordinary pizza, called coll'aglio e l'olio (with garlic and oil), is dressed with oil, and over it is spread, as well as salt, origanum and garlic cloves shredded minutely (optionally), often referred to as focaccia (depending on the region). Others can be covered in grated cheese and dressed with lard, and then they put on a few leaves of basil. Over the former is often added (depending on the region) some small seafish; on the latter some thin slices of mozzarella. Sometimes they use slices of prosciutto, tomato, arselle, etc. Sometimes folding the dough over itself to form what is called calzone",
    },
    {
      id: 42,
      name: "Spaghetti Carbonara",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      text: "The name carbonara is first attested in 1950, when it was described in the Italian newspaper La Stampa as a Roman dish sought out by American officers after the Allied liberation of Rome in 1944.[11] It was described as a Roman dish at a time when many Italians were eating eggs and bacon supplied by troops from the United States.",
    },
    {
      id: 43,
      name: "Sushi Rolls",
      category: "Food",
      image:
        "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN1c2hpJTIwUm9sbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Sushi roll (or roll sushi for Japanese) is a unique Westernized version of the Japanese maki sushi (or maki zushi). Like the maki sushi, it usually involves “rolling” the rice and nori using a makisu. Unlike in Japan, however, these have gone beyond the traditional Japanese maki sushi by changing the filling, adding toppings, finding alternatives to nori, and even flipping it inside out. There are no rules or specific definitions of a western sushi roll, for the creator has all the freedom in determining what would go best in it, around it, and even on it. So in a sense, a sushi roll is pretty much every other maki sushi out there that are not made in traditional sushi restaurants in Japan.",
    },
    {
      id: 44,
      name: "Tacos",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRhY29zfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      text: "Traditionally, tacos are filled with a variety of filling such as beef, chicken, fish, pork, cheese, lettuce, onions, guacamole, and salsa. Sauces can also be added to tacos ranging from salsa to hot sauces like Tapatío. People use many different combinations of foods to build the taco, so it is very versatile.",
    },
    {
      id: 45,
      name: "Burger",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
      text: "The term burger can also be applied to the meat patty on its own, especially in the United Kingdom, where the term patty is rarely used or can even refer to ground beef. Since the term hamburger usually implies beef, for clarity burger may be prefixed with the type of meat or meat substitute used, as in beef burger, turkey burger, bison burger, portobello burger, or veggie burger. In many English-speaking countries outside the United States, including the United Kingdom.",
    },
    {
      id: 46,
      name: "Caesar Salad",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1599021409369-c63af30619db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENhZXNhciUyMFNhbGFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      text: "The salad's creation is generally attributed to the restaurateur Caesar Cardini, an Italian immigrant who operated restaurants in Mexico and the United States.[2] Cardini lived in San Diego but ran one of his restaurants in Tijuana to attract American customers seeking to circumvent the restrictions of Prohibition. His daughter, Rosa, recounted that her father invented the salad at the Tijuana restaurant when a Fourth of July rush in 1924 depleted the kitchen's supplies. Cardini made do with what he had, adding the dramatic flair of table-side tossing by the chef.",
    },
    {
      id: 47,
      name: "Sushi Nigiri",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3VzaGklMjBOaWdpcml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Thus nigiri is a type of sushi where the rice is molded by hand and the fish or other topping pressed by hand atop the rice. And it's the stickiness of the rice, combined with the moisture from the topping, that helps to adhere the strip of raw fish to the mound of rice underneath.",
    },
    {
      id: 48,
      name: "Chocolate Cake",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENob2NvbGF0ZSUyMENha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes.[2] In 1828, Coenraad van Houten of the Netherlands developed a mechanical extraction method for extracting the fat from cacao liquor resulting in cacao butter and the partly defatted cacao, a compacted mass of solids that could be sold as it was rock cacao or ground into powder",
    },
    {
      id: 49,
      name: "Spices",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGN1aXNpbmV8ZW58MHwwfDB8fHww",
      text: "Indian cuisine has a large amount of regional variation, with many variations on the basic chicken curry recipe. Indian chicken curry typically starts with whole spices, heated in oil. A sauce is then made with onions, ginger, garlic, and tomatoes, and powdered spices. Bone-in pieces of chicken are then added to the sauce, and simmered until cooked through.[1] In south India, coconut and curry leaves are also common ingredients.[2] Chicken curry is usually garnished with coriander leaves, and served with rice or roti",
    },
    {
      id: 50,
      name: "Fruit Salad",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1590590470233-195e7fec2965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZydWl0JTIwU2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      text: "Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their juices or a syrup. In different forms, fruit salad can be served as an appetizer or a side as a salad. When served as an appetizer, a fruit salad is sometimes known as a fruit cocktail (often connoting a canned product), or fruit cup (when served in a small container).",
    },
  ]);

  return(
    <>
     <Store.Provider value={[data, setData]}>
        {props.children}
     </Store.Provider>
    </>
  )
}

export {StoredData}
export default Store