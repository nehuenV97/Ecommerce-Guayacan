import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
    return (
        <>            
            <NavBar />
            <ItemListContainer greeting={'Bienvenidos'}/>        
        </>
    )
}

export default Home;