package lida.javaBegginer.order_app.entity.repository;

import lida.javaBegginer.order_app.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
}
