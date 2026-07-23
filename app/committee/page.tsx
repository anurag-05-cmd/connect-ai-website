import { PageLayout } from "@/components/ui/page-layout";
import { User } from "lucide-react";

export default function CommitteePage() {
  const committees = [
    {
      title: "Patron",
      members: [
        { name: "Mrs. Banani Chakrabarti", role: "President, IEM-UEM Group" },
        { name: "Dr. Satyajit Chakrabarti", role: "Vice Chancellor, IEM-UEM Group" },
        { name: "Dr. Rajashree Paul", role: "Director, IQAC, IEM-UEM Group" },
      ]
    },
    {
      title: "Genral Chair",
      members: [
        { name: "Dr. Moutushi Singh", role: "Institute of Engineering and Management, Kolkata, India" },
        { name: "Dr. Baisakhi Das", role: "Institute of Engineering and Management, Kolkata, India" },
        { name: "Dr. Sanchita Ghosh", role: "Institute of Engineering and Management, Kolkata, India" },
      ]
    },
    {
      title: "Advisory Committee",
      members: [
        { name: "Dr. João Manuel R.S.Tavares", role: "Universidade do Porto, Portugal" },
        { name: "Dr. Daniele Giusto", role: "University of Cagliari, Italy" },
        { name: "Dr. Xiao-Zhi Gao", role: "University of Eastern Finland" },
        { name: "Dr. Michael Sheng", role: "Macquarie University, Australia" },
        { name: "Dr. Manuel Rincon", role: "Instituto de Empresa Business School, Spain" },
        { name: "Dr. Saïd Mahmoudi", role: "University of MONS, Belgium" },
        { name: "Dr. Chayapol Kamyod", role: "Mae Fah Luang University, Thailand" },
        { name: "Dr. Marcin Paprzycki", role: "Systems Research Institute Polish Academy of Sciences, Poland" },
        { name: "Dr. Akshay Kumar Rathore", role: "Singapore Institute of Technology, Singapore" },
        { name: "Dr. Nitin Kumar Tripathy", role: "Asian Institute of Technology, Bangkok" },
        { name: "Dr. Biplab Sikdar", role: "National University of Singapore" },
        { name: "Dr. Kaushik Rajashekara", role: "University of Houston, USA" },
        { name: "Dr. Mainak Majumder", role: "Monash University, Australia" },
        { name: "Dr. Lalit Garg", role: "University of Malta" },
        { name: "Dr. Sivaji Bandyopadhyay", role: "Jadavpur University" },
        { name: "Dr. Ling Liu", role: "Georgia Institute of Technology, USA" },
        { name: "Dr. Karan Singh", role: "Jawaharlal Nehru University, India" },
        { name: "Dr. Jacek Sroka", role: "University of Warsaw" },
        { name: "Dr. Subir Kumar Sarkar", role: "Jadavpur University" },
        { name: "Dr. Bharat Gupta", role: "NIT Patna, India" },
        { name: "Dr. Indrajit Banerjee", role: "IIEST, Shibpur" },
        { name: "Dr. P S M Tripathi", role: "Ministry of Communications, Govt of India" },
        { name: "Dr. Subhadip Basu", role: "Jadavpur University" },
        { name: "Dr. Om Pal", role: "MEIT, Govt of India" },
        { name: "Dr. Aprajita Ojha", role: "IIITDM Jabalpur, India" },
        { name: "Dr. Malay Gangopadhyay", role: "IEM Kolkata" },
        { name: "Dr. Raja Chakraborty", role: "Jio Reliance Foundation" },
        { name: "Dr. Debotosh Bhattacharjee", role: "Jadavpur University" },
        { name: "Dr. Arnab Sinha", role: "Amazon, Seattle, USA" },
        { name: "Dr. Sujata Dash", role: "Nagaland University" },
        { name: "Dr. Jyotsna Kumar Mandal", role: "University of Kalyani" },
        { name: "Dr. Dipankar Chakrabarti", role: "CtoE Consultancy Services" },
        { name: "Dr. Debashis De", role: "MAKAUT" },
        { name: "Mr. Arpan Singha", role: "Cognizant Technology Solutions" }
      ]
    },
    {
      title: "Technical Committee",
      members: [
        { name: "Dr. Sandip Chakraborty", role: "IIT Kharagpur" },
{ name: "Dr. Parth Gupta", role: "Coupang, San Francisco, USA" },
{ name: "Dr. Sanjay Chatterji", role: "IIIT Kalyani" },
{ name: "Dr. Indrajit Banerjee", role: "IIEST, Shibpur" },
{ name: "Dr. Sivaji Bandyopadhyay", role: "Jadavpur University" },
{ name: "Dr. Abhishek Das", role: "Alia University" },
{ name: "Dr. Sriparna Saha", role: "MAKAUT" },
{ name: "Dr. Pratyusha Rakshit", role: "Jadavpur University" },
{ name: "Dr. Anisha Halder Roy", role: "University of Calcutta" },
{ name: "Dr. Swarnendu Kr Chakraborty", role: "NIT Arunachal Pradesh" },
{ name: "Dr. Dinesh Dash", role: "NIT Patna" },
{ name: "Dr. Indranil Mitra", role: "PwC" },
{ name: "Dr. Somnath Banerjee", role: "University of Tartu, Estonia" },
{ name: "Dr. Daniel Hahn", role: "Quantum Servicios Maritimos, Chile" },
{ name: "Dr. Diptiman Banerji", role: "IIM Raipur" },
{ name: "Dr. Kamarujjaman", role: "MAKAUT" },
{ name: "Dr. Dipankar Das", role: "Jadavpur University" },
{ name: "Dr. Anupama Mehra", role: "Amity University, Noida" },
{ name: "Dr. Parag Kumar Guha Thakurta", role: "NIT Durgapur, West Bengal" },
{ name: "Dr. Anup Kumar Halder", role: "Warsaw University of Technology, Poland" },
{ name: "Dr. Khondekar Lutful Hassan", role: "Aliah University" },
{ name: "Dr. Souvik Sengupta", role: "Aliah University" },
{ name: "Dr. Sourav Pramanik", role: "University of Calcutta" },
{ name: "Dr. Samir Malakar", role: "The Arctic University of Norway" },
{ name: "Dr. Joy Dutta", role: "Khalifa University" },
{ name: "Dr. Deepak Kumar", role: "NIT Meghalaya" },
{ name: "Dr. Prabir Kumar Saha", role: "NIT Meghalaya" },
{ name: "Dr. Pratik Chattopadhyay", role: "IIT (BHU) Varanasi" },
{ name: "Dr. Gopularam Bhanu Prakash", role: "Apple India Pvt. Ltd" },
{ name: "Dr. Kaushik Mazumdar", role: "IIT (ISM) Dhanbad" }
      ]
    },
    {
      title: "Organizing Chairs",
      members: [
        { name: "Dr. Moutushi Singh", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Baisakhi Das", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Sanchita Ghosh", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Amit Kumar Das", role: "Institute of Engineering and Management, Kolkata, India" }
      ]
    },
    {
      title: "Organizing Committee",
      members: [
        { name: "Dr. Sukanya Mukherjee", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Darothi Sarkar", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Anupam Mondal", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Sainik Kumar Mahata", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Prithwineel Paul", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Susovan Jana", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Rupayan Das", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Subhabrata Sengupta", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Avijit Bose", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Soumyendu Sekhar Bandyopadhyay", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Soma Das", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Shreejita Mukherjee", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Shubhasri Roy", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Kajari Sur", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Sudipta Bhuyan", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Koushik Dutta", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Avipsita Chatterjee", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Bavrabi Ghosh", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Saikat Dutta", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Monalisa De", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Anindita Das Bhattacharjee", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Shreyashi Dutta", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Koushik Banerjee", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Sayani Chatterjee", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Ankita Sen", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Sangeeta Sarkar", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Ardhendu Sarkar", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Swagatam Basu", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Pulak Baral", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Subindu Saha", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Soumadip Biswas", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Rabi Narayan Behera", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Amit Kumar Mondal", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Partha Sarathi Paul", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Rakesh Das", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Ayan Chaudhuri", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Bijoyini Baghchi", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Sobya Devraj", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Apurba Paul", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Tanima Bhowmik", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Partha Chakraborty", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Mohuya Ghosh", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Kartik Ghosh", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Pinaki Karmakar", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Amit Kumar Roy", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Mr. Aishik Das", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Dr. Sourav Malakar", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Sipra Singh", role: "Institute of Engineering and Management, Kolkata, India" },
{ name: "Ms. Karabi Konar", role: "Institute of Engineering and Management, Kolkata, India" }
      ]
    },
  ];

  const getInitials = (name: string) => {
    return name
      .replace(/Dr\.|Prof\./g, "")
      .trim()
      .split(" ")
      .map(n => n[0])
      .join("")
      .substring(0, 2);
  };

  return (
    <PageLayout>
      <section className="flex-1 pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary font-semibold tracking-wider uppercase mb-6">
            <span className="w-8 h-px bg-primary" />
            Leadership
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
            Connect AI 2027 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Committee</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-16">
            Meet the dedicated individuals behind ConnectAI 2027.
          </p>
          
          <div className="space-y-20">
            {committees.map((committee, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-3xl font-display font-bold text-foreground">{committee.title}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {committee.members.map((member, index) => (
                    <div key={index} className="group p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/[0.05] hover:bg-foreground/[0.04] transition-all duration-300 flex items-center gap-5 hover:shadow-sm">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="font-display font-bold text-lg text-foreground/80 tracking-widest">{getInitials(member.name)}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1 font-display leading-tight">{member.name}</h3>
                        <p className="text-sm text-primary font-medium">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
