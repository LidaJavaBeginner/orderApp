package lida.javaBegginer.order_app.entity.repository;

import lida.javaBegginer.order_app.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerEntity,Long> {
}
