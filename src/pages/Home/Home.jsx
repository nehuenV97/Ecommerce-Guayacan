// import ItemCount from "../../components/ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
// import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import NavBar from "../../components/NavBar/NavBar";
import TabsComponent from "../../components/Tabs/Tabs";


const Home = () => {
    return (
        <>            
            <NavBar />
            <TabsComponent />         
            {/* <ItemListContainer greeting={'Bienvenidos'}/> */}
            <ItemDetailContainer />
        </>
    )
}

export default Home;