package lida.javaBegginer.order_app.service;

import lida.javaBegginer.order_app.dto.ProductDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

    List<ProductDTO> getAllProducts();
}
