import infrastructures from "@frameworks/web/di/infrastructures";
import repositories from "@frameworks/web/di/repositories";
import useCases from "@frameworks/web/di/useCases";
import presenters from "@frameworks/web/di/presenters";
import IPresenters from "@frameworks/web/di/interfaces/iPresenters";

const cInfrastructures = infrastructures();
const cRepositories = repositories(cInfrastructures);
const cUseCases = useCases(cRepositories);
const cPresenters = presenters(cUseCases);

export default {
  orderList: cPresenters.orderList,
} as IPresenters;
