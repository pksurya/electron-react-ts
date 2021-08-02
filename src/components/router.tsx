import { Route, Switch } from "react-router-dom";
import { HomeComponent, AboutComponent } from '.';

type Props = {}
const Routes: React.FC<Props> = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={HomeComponent} />
            <Route exact={true} path="/about" component={AboutComponent} />
        </Switch>
    )
}
export default Routes
