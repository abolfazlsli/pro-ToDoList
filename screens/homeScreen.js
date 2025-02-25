import { Input, Layout, Text, Button } from "@ui-kitten/components"
import InputCustom from "../components/input";


const HomeScreen = () =>(
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
    <Button>TEst</Button>
    <InputCustom type={"password"} />
  </Layout>
);

export default HomeScreen