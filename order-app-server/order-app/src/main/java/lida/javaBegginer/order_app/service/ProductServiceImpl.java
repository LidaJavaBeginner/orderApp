package lida.javaBegginer.order_app.service;

import lida.javaBegginer.order_app.dto.ProductDTO;
import lida.javaBegginer.order_app.mapper.ProductMapper;
import lida.javaBegginer.order_app.entity.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductMapper productMapper;

    /**
     * @return
     */
    @Override
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll().stream()
                .map((productEntity -> productMapper.toDTO(productEntity)))
                .toList();
    }
}
