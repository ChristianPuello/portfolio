import Card from "./components/Card"

function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white">
        <header className="flex items-center justify-between px-8 py-4 bg-slate-800 shadow-lg">
          <h1 className="text-2xl font-bold tracking-wide">
            Christian Puello's Portfolio
          </h1>

          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-blue-400 transition">
              About
            </a>
  
            <a href="#" className="hover:text-blue-400 transition">
              Contact
            </a>
          </nav>
        </header>

        <div className="p-9 grid grid-cols-3 gap-6">
          <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
          <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
          <Card title="example" bodytext="lafuahfodhfisdhfiaoshflidsahfadsfsa lfhskljadhf kljsahdf ksjhaflksjhd fljadkshd flkjsah fkjldhsalkjfh sakjfhsakfdhl"></Card>
        </div>
        

        
      </div>
    </>
  )
}

export default App
