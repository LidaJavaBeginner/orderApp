package lida.javaBegginer.order_app.entity.repository;

import lida.javaBegginer.order_app.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
}
