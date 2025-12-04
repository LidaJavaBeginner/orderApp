package lida.javaBegginer.order_app.controller;

import lida.javaBegginer.order_app.dto.OrderDTO;
import lida.javaBegginer.order_app.dto.OrderRequestDTO;
import lida.javaBegginer.order_app.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/order")
    public OrderDTO createOrder(@RequestBody OrderRequestDTO request){
       return orderService.createOrder(request);
    }

    @GetMapping("/order/{id}")
    public OrderDTO getOrderById(@PathVariable Long id){
        return orderService.getOrderById(id);
    }


}
