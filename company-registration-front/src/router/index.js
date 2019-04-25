import OrganizacaoEdit from "../components/OrganizacaoEdit";
import Organizacao from "../components/Organizacao";
import Home from "../components/Home";

export const routes = [
  { path: "", component: Home },
  { path: "/organizacao", component: Organizacao },
  { path: "/organizacao/:id/edit", component: OrganizacaoEdit }
];
