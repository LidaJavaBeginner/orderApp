package lida.javaBegginer.order_app.service;

import jakarta.persistence.EntityNotFoundException;
import lida.javaBegginer.order_app.dto.OrderRequestDTO;
import lida.javaBegginer.order_app.dto.OrderDTO;
import lida.javaBegginer.order_app.entity.ProductEntity;
import lida.javaBegginer.order_app.entity.repository.ProductRepository;
import lida.javaBegginer.order_app.mapper.CustomerMapper;
import lida.javaBegginer.order_app.mapper.OrderMapper;
import lida.javaBegginer.order_app.entity.CustomerEntity;
import lida.javaBegginer.order_app.entity.OrderEntity;
import lida.javaBegginer.order_app.entity.repository.CustomerRepository;
import lida.javaBegginer.order_app.entity.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    OrderMapper orderMapper;

    @Autowired
    CustomerMapper customerMapper;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Override
    public OrderDTO createOrder(OrderRequestDTO request) {
        CustomerEntity newCustomer = customerMapper.toEntity(request.getCustomerDTO());
        CustomerEntity savedCustomer = customerRepository.save(newCustomer);

        OrderEntity newOrder = orderMapper.toEntity(request.getOrderDTO());
        newOrder.setCustomer(savedCustomer);
        newOrder.setProduct(productRepository.getReferenceById(request.getOrderDTO().getProduct().getId()));
        OrderEntity savedOrder = orderRepository.save(newOrder);

        return orderMapper.toDTO(savedOrder);
    }

    /**
     * @param id
     * @return
     */
    @Override
    public OrderDTO getOrderById(Long id) {
        OrderEntity orderEntity =  orderRepository.findById(id)
                .orElseThrow(()->new EntityNotFoundException("Objednávka nebyla nalezena"));
        return orderMapper.toDTO(orderEntity);
    }
}
