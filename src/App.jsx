
import fundoJade from './assets/fundo-jade.png';

function App() {
  return (
    // Container Principal com o verde de fundo
    <div className="min-h-screen bg-jade-green flex items-center justify-center p-4 md:p-8">
      
      {/* IMAGEM DE FUNDO FIXA (Ajustada para os bichos ficarem como moldura) */}
      <div 
        className="fixed inset-0 w-full h-full opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url(${fundoJade})`,
          backgroundSize: 'cover', // Faz os bichos ficarem menores e aparecerem inteiros
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* CARD DE CONTEÚDO (Onde a mágica acontece) */}
      <main className="relative z-10 max-w-2xl w-full bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 border border-white/20">
        
        {/* EXPLICAÇÃO BREVE */}
        <header className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-jade-green font-bold mb-4">
            Movimento Jade
          </h1>
          <p className="text-stone-700 text-lg leading-relaxed">
            Ijuí precisa de políticas públicas reais para o bem-estar animal. 
            Estamos coletando assinaturas para levar o Projeto de Lei de Iniciativa Popular 
            à Câmara de Vereadores. <strong>Sua participação é fundamental.</strong>
          </p>
        </header>

        {/* FORMULÁRIO SIMPLES */}
        <section>
          <h2 className="text-2xl font-serif text-jade-green mb-6 border-b border-jade-green/20 pb-2">
            Ajude a causa
          </h2>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-stone-600 mb-1">Nome Completo</label>
              <input 
                type="text" 
                className="w-full p-3 bg-jade-light border border-stone-200 rounded-lg focus:ring-2 focus:ring-jade-green outline-none transition"
                placeholder="Como no seu título de eleitor"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-stone-600 mb-1">CPF</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-jade-light border border-stone-200 rounded-lg focus:ring-2 focus:ring-jade-green outline-none transition"
                  placeholder="000.000.000-00"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-600 mb-1">Título de Eleitor</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-jade-light border border-stone-200 rounded-lg focus:ring-2 focus:ring-jade-green outline-none transition"
                  placeholder="Número do título"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-600 mb-1">CEP (Somente Ijuí)</label>
              <input 
                type="text" 
                className="w-full p-3 bg-jade-light border border-stone-200 rounded-lg focus:ring-2 focus:ring-jade-green outline-none transition"
                placeholder="98700-000"
              />
              <p className="text-xs text-stone-500 mt-1 italic">
                * O endereço será preenchido automaticamente após digitar o CEP.
              </p>
            </div>

            <button 
              type="submit" 
              className="w-full bg-jade-green text-white font-serif text-xl py-4 rounded-xl shadow-lg hover:bg-stone-800 transition-all transform hover:scale-[1.02] active:scale-95 mt-6"
            >
              Assinar Agora
            </button>
          </form>
        </section>

        <footer className="mt-8 text-center text-stone-400 text-sm">
          <p>Movimento Popular Jade - Ijuí/RS</p>
        </footer>
      </main>

    </div>
  );
}

export default App;