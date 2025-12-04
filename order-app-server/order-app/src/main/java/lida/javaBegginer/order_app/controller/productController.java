package lida.javaBegginer.order_app.controller;

import lida.javaBegginer.order_app.dto.ProductDTO;
import lida.javaBegginer.order_app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class productController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public List<ProductDTO> getAllProducts(){
        return productService.getAllProducts();
    }
}
