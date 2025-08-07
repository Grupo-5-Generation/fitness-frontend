

function Home() {
    return (
        <>
            < div className="bg-[url(https://ik.imagekit.io/vtdzeofuq/fotogrupo5fundo.png?updatedAt=1754492314938)]  bg-no-repeat bg-cover bg-fixed">
                <div className="flex flex-col gap-5 text-white p-5 ">
                    <h1 className='mt-30 text-6xl  text-left text-shadow-lg/30 font-joti'>Projeto Fitness</h1>
                    <h2 className="text 4xl text-left  italic px-17">Upgrade no Corpo: Tecnologia e Saúde</h2>
                    <div className="mt-30 py-6 border-4 border-white bg-black/70 rounded-2xl">
                        <h2 className='text-3xl text-center font-bold'>Por Trás da Escolha</h2>
                    < div className="m-12 flex flex-col gap-2">
                        <p>Vivemos em uma era em que a tecnologia está presente em praticamente todos os aspectos da nossa vida.
                            Ao mesmo tempo, a busca por saúde, bem-estar e qualidade de vida nunca foi tão necessária.
                            Foi dessa união que nasceu a ideia do nosso projeto fitness: integrar inovação tecnológica e hábitos saudáveis para transformar a maneira como cuidamos do corpo e da mente.</p>
                        <p>Escolhemos esse tema porque acreditamos que movimento é vida, e que, com as ferramentas certas, podemos motivar e apoiar mais pessoas a adotarem um estilo de vida ativo.
                            Além disso, o setor fitness vem crescendo exponencialmente, impulsionado por aplicativos, dispositivos inteligentes e novas formas de acompanhamento personalizado, o
                            que abre espaço para soluções criativas e acessíveis.</p>
                        <p>Nosso objetivo é mostrar que a tecnologia não precisa afastar as pessoas do exercício físico — pelo contrário, ela pode ser a ponte para resultados melhores, mais rápidos e mais consistentes.</p>
                    <h2 className='mt-30 text-3xl text-center font-bold'>Sobre o Projeto</h2>
                    < div className="m-12 flex flex-col gap-2">
                        <p>O GenPass é uma aplicação desenvolvida para facilitar o gerenciamento de treinos externos, voltada para quem busca praticidade e desempenho na rotina fitness.
                            Pensando em atletas, personal trainers e frequentadores de academia, o sistema oferece uma plataforma robusta que permite cadastrar, monitorar, atualizar e 
                            organizar treinos de forma simples e eficiente.</p>
                            <p>
                                Com uma estrutura backend sólida e tecnologias modernas como Typescript, NestJS e Node.js, o GenPass garante segurança, escalabilidade e performance no controle dos dados.
                                A aplicação utiliza MySQL para armazenamento das informações, contando com uma tabela específica para os treinos que registra detalhes essenciais como tipo do treino (cardio, força, etc.),
                                número de repetições e séries.
                            </p>
                            <p>
                                Entre as principais funcionalidades do GenPass estão o cadastro completo de treinos, atualização rápida dos exercícios, acompanhamento da rotina, 
                                busca por tipos ou IDs específicos e a exclusão de treinos que não são mais necessários. 
                                Essas opções fornecem flexibilidade para que o usuário mantenha sua programação sempre alinhada às suas metas e progresso.
                            </p>
                            <p>
                                Além disso, o projeto conta com o TypeORM para facilitar a integração entre o banco de dados e a aplicação, e utiliza a ferramenta Insônia para testar e simular as rotas da API,
                                garantindo que todas as operações funcionem corretamente.
                            </p>
                            <p> 
                                Em resumo, o GenPass é uma solução tecnológica pensada para tornar o dia a dia fitness mais organizado, personalizado e conectado, 
                                ajudando os usuários a alcançarem melhores resultados com eficiência e controle total da sua rotina de treinos.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home