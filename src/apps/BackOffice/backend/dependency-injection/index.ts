import { InjectionMode, asClass, createContainer } from 'awilix';
import { StatusGetController } from '../controllers/StatusGetController';

type IControllers = {
  statusGetController: StatusGetController;
};

type IContainer = IControllers;

const container = createContainer<IContainer>({
  strict: true,
  injectionMode: InjectionMode.PROXY,
});

container.register({
  statusGetController: asClass(StatusGetController),
});

const cradle = container.cradle;

export { container, cradle };
