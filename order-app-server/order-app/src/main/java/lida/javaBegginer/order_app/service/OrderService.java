package lida.javaBegginer.order_app.service;

import lida.javaBegginer.order_app.dto.OrderRequestDTO;
import lida.javaBegginer.order_app.dto.OrderDTO;
import org.springframework.stereotype.Service;

@Service
public interface OrderService {

    OrderDTO createOrder(OrderRequestDTO request);

    OrderDTO getOrderById(Long id);
}
