import Layout from "./component/layout/layout";

function Accueil() {

return (
    <Layout>

    <div className="page-accueil flex justify-between items-center mx-10 h-full max-h-full max-[780px]:block max-[780px]:mx-0">
        <div className="image-accueil relative h-full">
            <img src="/img/accueil.png" alt="développeuse web" className="h-full w-full"/>
            <h2 className="text-lg text-[#F5EBE0] tracking-wider absolute top-1 right-12 text-right ml-7 font-['JuliusSansOne'] max-[980px]:ml-[120px] max-[780px]:ml-7">Bienvenue sur ma page portfolio</h2>
        </div>

        <div className="metier w-2/5 text-[2.5rem] -translate-x-7 max-[780px]:absolute max-[780px]:top-[50%] max-[780px]:right-[50px] max-[780px]:text-[2rem]">
            <h1 className="font-['JuliusSansOne']">Développeuse 
                <hr className="w-[60%]"/> 
                <span className="accueil-metier">Web</span> 
                And 
                <span className="accueil-metier">Web Mobile</span> 
                <hr className="w-[60%]"/>
            </h1>
        </div>
    </div>

    </Layout>
);
}

export default Accueil;